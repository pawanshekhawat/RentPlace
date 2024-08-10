const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    image: {
        filename: { type: String },
        url: { type: String },
    },
    price: {
        type: Number,
        default: 0,
    },
    location: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
