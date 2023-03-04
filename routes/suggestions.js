const { router } = require("../utils/packages");
const suggestions = require("../controllers/suggestions");

router.get("/suggestions", suggestions);

router.post("/suggestions", (req, res)=>{
    res.redirect("/suggestions", {message: "Successful"})
});

module.exports = router;