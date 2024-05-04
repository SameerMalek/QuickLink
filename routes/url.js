const express = require("express");
const {
  handleCreateShortUrl,
  handleGetShortUrlsByShortID,
  handleGetAnalytics,
} = require("../controllers/url");
const router = express.Router();

//route: /URL
router.route("/").post(handleCreateShortUrl);

//route: /:shortid
router.route("/:shortId").get(handleGetShortUrlsByShortID);

//route: /analytics/:shortid
router.route("/analytics/:shortId").get(handleGetAnalytics);

module.exports = router;
