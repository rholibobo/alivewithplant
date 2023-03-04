const { router } = require("../utils/packages");
const gallery = require("../controllers/gallery");

router.get("/gallery", gallery);

module.exports = router;