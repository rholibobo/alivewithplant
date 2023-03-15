const { router } = require("../utils/packages");
const contact = require("../controllers/contact");

router.get("/contact-us", contact);

router.post("/contact-us", (req, res)=>{
    res.redirect("/suggestions", {message: "Successful"})
});

module.exports = router;