const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const listingCTRL = require("../controllers/listingsCTRL");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

router.route("/")
    // Index Route
    .get(wrapAsync(listingCTRL.index))
    // Create Route
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingCTRL.createListing));

// New Route
router.get("/new", isLoggedIn, listingCTRL.renderNewForm);

router.route("/:id")
    // Show Route
    .get(wrapAsync(listingCTRL.showListing))
    // Update Route
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingCTRL.updateListing))
    // Delete Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingCTRL.deleteListing));


// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingCTRL.editListing));

module.exports = router;
