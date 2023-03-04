const { router } = require("../utils/packages");
const contact = require("../controllers/contact");

router.get("/contact-us", contact);

module.exports = router;