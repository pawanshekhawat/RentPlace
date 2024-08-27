const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middleware");

const userCTRL = require("../controllers/usersCTRL");

router.route("/signup")
    //Render SignUp Form
    .get(userCTRL.renderSignupForm)
    //Create User ID
    .post(wrapAsync(userCTRL.createUser));

router.route("/login")
    //Render Login Form
    .get(userCTRL.renderLoginForm)
    //Authenticate User Login
    .post(saveRedirectUrl, passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/login"
    }),
        userCTRL.loginUser
    );

router.get("/logout", userCTRL.logoutUser);

module.exports = router;
