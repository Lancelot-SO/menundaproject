import Mainthumb from "./assets/property/mainthumbnail.png";
import Thumb1 from "./assets/property/thumbnail1.png";
import Thumb2 from "./assets/property/thumbnail2.png";
import Thumb3 from "./assets/property/thumbnail3.png";
import Thumb4 from "./assets/property/thumbnail4.png";

const propertyDetailsData = [
    {
        id: 1,
        title: "Modern 4 Bedroom House",
        description: "A luxurious 4-bedroom house with modern architecture and a spacious living area.",
        yearBuilt: "2007",
        propertyType: "House",
        size: "2,500 sqft",
        bedrooms: 4,
        bathrooms: 2,
        mainImage: Mainthumb,
        thumbnails: [
            Thumb1, Thumb2, Thumb3, Thumb4,
        ],
    },
    {
        id: 2,
        title: "Luxury Beachside Villa",
        description: "An elegant villa with breathtaking ocean views and premium amenities.",
        yearBuilt: "2015",
        propertyType: "Villa",
        size: "3,800 sqft",
        bedrooms: 5,
        bathrooms: 4,
        mainImage: Mainthumb,
        thumbnails: [
            Thumb1, Thumb2, Thumb3, Thumb4,
        ],
    },
];

export default propertyDetailsData;
