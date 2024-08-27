const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const { category, search } = req.query;
    let filter = {};

    if (category && category !== "") {
        filter.category = category;
    }

    if (search && search.trim() !== "") {
        filter.title = new RegExp(search, 'i'); // Case-insensitive search
    }

    const allListing = await Listing.find(filter);

    if (allListing.length === 0 && search) {
        req.flash("error", "No listings match your search.");
    } else if (allListing.length === 0 && !search) {
        req.flash("error", "No listings available.");
    }

    res.render("listings/index", { allListing, category, search });
};



module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews", populate: {
            path: "author",
        }
    }).populate("owner");
    if (!listing) {
        req.flash("error", "Place doesn't exist");
        return res.redirect("/listings");
    }
    console.log(listing)
    res.render("listings/show.ejs", { listing });
}
module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "New Place Added!");
    res.redirect("/listings");
}

module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Place doesn't exist");
        res.redirect("/listings");
    }
    let OGURL = listing.image.url;
    OGURL = OGURL.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, OGURL });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Details Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing)
    req.flash("success", "Place Deleted Successfully!");
    res.redirect("/listings");
}