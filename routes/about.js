const { router } = require("../utils/packages");
const about = require("../controllers/about");

router.get("/about-us", about);

module.exports = router;