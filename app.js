const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");

const MONGO_URL = "mongodb+srv://pawanshekhawat2402:57Qs3iUB723WcO5R@cluster0.inibxa0.mongodb.net/rentplace?retryWrites=true&w=majority&tls=true";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");

    } catch (err) {
        console.log(err);
    }
}

main();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Server is working");
});

// Index Route
app.get("/listings", async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index", { allListing });
});

//Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})

//New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
})

app.listen(5000, () => {
    console.log("Server is listening to port 5000");
});
