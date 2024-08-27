const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://pawanshekhawat2402:57Qs3iUB723WcO5R@cluster0.inibxa0.mongodb.net/rentplace?retryWrites=true&w=majority&tls=true"

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    const updatedData = data.map((obj) => ({...obj, owner: "66c18417c5ea3095c43015e3"}));
    await Listing.insertMany(updatedData);
    console.log("data was initialized");
}

initDB(); 