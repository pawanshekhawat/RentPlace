const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");


const listings = require("./routes/listing");
const reviews = require("./routes/review");

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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Server is working");
});

app.use("/listings", listings); 
app.use("/listings/:id/reviews", reviews); 

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"))
})

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
    // res.status(statusCode).send(message);
})

app.listen(5000, () => {
    console.log("Server is listening to port 5000");
});
