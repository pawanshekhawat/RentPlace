const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

const reviewsCTRL = require("../controllers/reviewsCTRL");

//Post Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewsCTRL.createReview));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewsCTRL.deleteReview))

module.exports = router;