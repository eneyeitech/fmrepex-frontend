const services = [
    {
        id: 1,
        name: "Alarms and Smoke Detectors",
        img_url:"alarms_and_smoke_detectors.svg"
    },
    {
        id: 2,
        name: "Audio Visuals",
        img_url:"audio_visuals.svg"
    },
    {
        id: 3,
        name: "Bathroom and Toilet",
        img_url:"bathroom_and_toilet.svg"
    },
    {
        id: 4,
        name: "Communal Facilities",
        img_url:"communal_facilities.svg"
    },
    {
        id: 5,
        name: "Doors, Garages and Locks",
        img_url:"doors_garages_and_locks.svg"
    },
    {
        id: 6,
        name: "Electricity",
        img_url:"electricity.svg"
    },
    {
        id: 7,
        name: "Exterior and Garden",
        img_url:"exterior_and_garden.svg"
    },
    {
        id: 8,
        name: "Fire",
        img_url:"fire.svg"
    },
    {
        id: 9,
        name: "Furniture",
        img_url:"furniture.svg"
    },
    {
        id: 10,
        name: "Heater and Boiler",
        img_url:"heater_and_boiler.svg"
    },
    {
        id: 11,
        name: "Hot Water",
        img_url:"hot_water.svg"
    },
    {
        id: 12,
        name: "Internal Floors",
        img_url:"internet.svg"
    },
    {
        id: 13,
        name: "Internet",
        img_url:"internet.svg"
    },
    {
        id: 14,
        name: "Kitchen",
        img_url:"kitchen.svg"
    },
    {
        id: 15,
        name: "Laundry",
        img_url:"laundry.svg"
    },
    {
        id: 16,
        name: "Lighting",
        img_url:"lighting.svg"
    },
    {
        id: 17,
        name: "Other",
        img_url:"other.svg"
    },
    {
        id: 18,
        name: "Pests",
        img_url:"pests.svg"
    },
    {
        id: 19,
        name: "Property Inspection",
        img_url:"property_inspection.svg"
    },
    {
        id: 20,
        name: "Property Services",
        img_url:"property_services.svg"
    },
    {
        id: 21,
        name: "Roof",
        img_url:"roof.svg"
    },
    {
        id: 22,
        name: "Smell Oil",
        img_url:"smell_oil.svg"
    },
    {
        id: 23,
        name: "Stairs",
        img_url:"stairs.svg"
    },
    {
        id: 24,
        name: "Utility Meters",
        img_url:"water_and_leaks.svg"
    },
    {
        id: 25,
        name: "Water and Leaks",
        img_url:"water_and_leaks.svg"
    },
    {
        id: 26,
        name: "Windows",
        img_url:"windows.svg"
    }
];

const newService = {
    id: null,
    name: "",
    img_url:""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
   services
};
