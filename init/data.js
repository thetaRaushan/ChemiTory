const sampleListing = [
  {
    title: "Sodium Chloride",
    price: 120,
    quantity: 500,
    location: "Omkar Chemicals Warehouse, Navi Mumbai, Maharashtra",
    country: "India",
    description: "Common salt used in food processing and chemical synthesis.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/11/29/03/53/salt-1868584_1280.jpg",
      filename: "salt-1868584.jpg"
    }
  },
  {
    title: "Acetic Acid",
    price: 300,
    quantity: 1000,
    location: "Dr. Reddy's Analytical Lab, Okhla Phase II, New Delhi",
    country: "India",
    description: "Organic acid used in vinegar and as a chemical reagent.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/08/10/07/32/laboratory-2618961_1280.jpg",
      filename: "acetic-lab.jpg"
    }
  },
  {
    title: "Sulfuric Acid",
    price: 400,
    quantity: 1000,
    location: "Shakti Storage Facility, Guindy Industrial Estate, Chennai",
    country: "India",
    description: "Strong mineral acid used in batteries and fertilizers.",
    image: {
      url: "https://cdn.pixabay.com/photo/2014/11/14/20/36/laboratory-531069_1280.jpg",
      filename: "sulfuric-acid-lab.jpg"
    }
  },
  {
    title: "Ethanol",
    price: 250,
    quantity: 1000,
    location: "BioFuel Research Lab, Salt Lake, Kolkata",
    country: "India",
    description: "Volatile alcohol used in sanitizers, fuel, and chemistry labs.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/03/03/13/13/laboratory-2111187_1280.jpg",
      filename: "ethanol.jpg"
    }
  },
  {
    title: "Hydrochloric Acid",
    price: 280,
    quantity: 750,
    location: "Pragati Chemicals Warehouse, Cherlapally, Hyderabad",
    country: "India",
    description: "Corrosive acid used in cleaning agents and pH control.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/05/10/16/46/laboratory-2309200_1280.jpg",
      filename: "hcl-lab.jpg"
    }
  },
  {
    title: "Ammonia",
    price: 150,
    quantity: 500,
    location: "Precision Chemicals Storage Unit, Hadapsar, Pune",
    country: "India",
    description: "Colorless gas used in fertilizers and refrigeration.",
    image: {
      url: "https://cdn.pixabay.com/photo/2018/06/28/14/02/chemistry-3502879_1280.jpg",
      filename: "ammonia.jpg"
    }
  },
  {
    title: "Potassium Nitrate",
    price: 320,
    quantity: 1000,
    location: "Bangalore Chem Depot, Peenya Industrial Area, Bengaluru",
    country: "India",
    description: "Oxidizing agent used in fireworks, fertilizers, and food preservation.",
    image: {
      url: "https://cdn.pixabay.com/photo/2015/06/12/19/54/laboratory-807248_1280.jpg",
      filename: "potassium-nitrate.jpg"
    }
  },
  {
    title: "Calcium Carbonate",
    price: 180,
    quantity: 1000,
    location: "White Earth Storage, GIDC Vatva, Ahmedabad",
    country: "India",
    description: "Inorganic compound used in construction and as a dietary supplement.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/10/02/21/54/calcium-carbonate-1713380_1280.jpg",
      filename: "calcium-carbonate.jpg"
    }
  },
  {
    title: "Magnesium Sulfate",
    price: 210,
    quantity: 500,
    location: "Jaipur Industrial Chemicals Warehouse, Sitapura, Jaipur",
    country: "India",
    description: "Commonly known as Epsom salt, used in agriculture and medicine.",
    image: {
      url: "https://cdn.pixabay.com/photo/2018/04/03/21/10/chemistry-3285883_1280.jpg",
      filename: "magnesium-sulfate.jpg"
    }
  },
  {
    title: "Nitric Acid",
    price: 390,
    quantity: 1000,
    location: "Central Research Lab, Gomti Nagar, Lucknow",
    country: "India",
    description: "Highly corrosive acid used in fertilizers and explosives.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/01/06/19/15/chemistry-1952305_1280.jpg",
      filename: "nitric-acid.jpg"
    }
  },
  {
    title: "Sodium Hydroxide",
    price: 270,
    quantity: 1000,
    location: "Sunrise Chemicals Storage, Sachin GIDC, Surat",
    country: "India",
    description: "Strong base used in soap making and chemical processing.",
    image: {
      url: "https://cdn.pixabay.com/photo/2015/07/18/07/28/laboratory-849444_1280.jpg",
      filename: "sodium-hydroxide.jpg"
    }
  },
  {
    title: "Barium Chloride",
    price: 310,
    quantity: 500,
    location: "Nagpur Chemical Warehouse, MIDC Hingna, Nagpur",
    country: "India",
    description: "Toxic compound used in heat treatment baths and fireworks.",
    image: {
      url: "https://cdn.pixabay.com/photo/2020/08/17/19/45/chemistry-5496632_1280.jpg",
      filename: "barium-chloride.jpg"
    }
  },
  {
    title: "Zinc Sulfate",
    price: 260,
    quantity: 750,
    location: "NanoTech R&D Lab, IIT Kanpur Campus, Kanpur",
    country: "India",
    description: "Used as a dietary supplement and in agricultural sprays.",
    image: {
      url: "https://cdn.pixabay.com/photo/2019/03/28/00/10/chemical-4085665_1280.jpg",
      filename: "zinc-sulfate.jpg"
    }
  },
  {
    title: "Phenol",
    price: 340,
    quantity: 500,
    location: "GreenTech Chemical Storage, Govindpura Industrial Area, Bhopal",
    country: "India",
    description: "Toxic compound used in antiseptics and resins.",
    image: {
      url: "https://cdn.pixabay.com/photo/2016/09/21/02/44/experiment-1682031_1280.jpg",
      filename: "phenol.jpg"
    }
  },
  {
    title: "Silver Nitrate",
    price: 900,
    quantity: 300,
    location: "Vizag Chemical Labs Pvt. Ltd., Gajuwaka, Visakhapatnam",
    country: "India",
    description: "Light-sensitive compound used in photography and antiseptics.",
    image: {
      url: "https://cdn.pixabay.com/photo/2017/07/11/10/38/laboratory-2496196_1280.jpg",
      filename: "silver-nitrate.jpg"
    }
  }

];

module.exports = { data: sampleListing };
