const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


//index route
// // app.get("/testListing",(req,res)=>{
//     let sampleListing = new Listing({
//         title : "Water",
//         description : "A very Normal and Natural Chemical Which is used for Drinking.",
//         price : 10,
//         location : "1A First",
//         country : "India",
//         quantity : 200,
//     });

//     sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successful");
// });
router.get("/", wrapAsync(listingController.index));

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//show route
router.get("/:id", wrapAsync(listingController.showListing));

//create route
router.post("/", isLoggedIn, validateListing, upload.single("listing[image]"), wrapAsync(listingController.createListing));

//edit route
router.get("/:id/edit", isLoggedIn,isOwner, upload.single("listing[image]"), wrapAsync(listingController.renderEditForm));

//Update route
router.put("/:id", isLoggedIn,isOwner,  validateListing,upload.single("listing[image]"), wrapAsync(listingController.updateListing));

//delete route
router.delete("/:id", isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;