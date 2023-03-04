const { router } = require("../utils/packages");
const home = require("../controllers/home");

router.get("/", home);

module.exports = router;
