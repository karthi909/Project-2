const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/functionup/colleges", controller.createCollage )

router.post("/functionup/interns", controller.createIntern)

router.get("/functionup/collegeDetails", controller.getCOllageDetails)


module.exports = router;