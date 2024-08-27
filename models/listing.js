const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

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
        url: String,
        filename: String,
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
    reviews: [{
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        enum: ["Mountains", "Arctic", "Rooms", "Iconic Cities", "Castles", "Swimming Pools", "Camping", "Farms", "Igloo", "Dungeon", "Beachfront", "Urban", "Historic", "Unique", "Luxury", "Safari"]
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id : {$in: listing.reviews}})
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
