const express = require("express");
const router = express.Router();

const {registerUser,loginUser} = require("../controller/authController.js");
const verifyToken = require("../middleware/auth.middleware.js");

router.post("/register", registerUser);
router.post("/login",loginUser);
router.get("/test", (req, res) => {
    return res.json({
        message: "Test route working"
    });
});
router.get("/profile", verifyToken, (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to your profile",
        user: req.user
    });
});
router.post("/resume/upload", verifyToken, (req, res)=>{
    res.send("upload route is running")
});
module.exports = router;