const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index", { allListing });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author", }, }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("listings");
    }
    res.render("listings/show", { listing });
};

// module.exports.createListing = async (req, res, next) => {
//     let url = req.file.path;
//     let filename = req.file.filename;
//     if (!req.body.listing) {
//         throw new ExpressError(400, "Send Valid data for listing");
//     }
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;
//     newListing = {url,filename};
//     await newListing.save();
//     req.flash("success","New Listing Created!");
//     res.redirect("listings");
// };


// chat gpt code
module.exports.createListing = async (req, res, next) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send Valid data for listing");
    }

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;

    // If image was uploaded, add to listing
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings"); // also corrected this route
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("upload","upload/w_150");
    res.render("listings/edit", { listing,originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    // Update text fields
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Check if a new image was uploaded
    if (req.file) {
        // Update image fields
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await listing.save();
    }

    req.flash("success", "Listing updated");
    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
};