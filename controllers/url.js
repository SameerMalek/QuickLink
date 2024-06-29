const URL = require("../models/url");
const shortid = require("shortid");

async function handleCreateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render("home",{
    id:shortID
  })
}

async function handleGetShortUrlsByShortID(req, res) {
  const shortId = req.params.shortId;
  
  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timeStamp: Date.now(),
          },
        },
      }
    );
    
    if (!entry) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error('Error retrieving short URL:', error);
    res.status(500).json({ error: 'Server error' });
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleCreateShortUrl,
  handleGetShortUrlsByShortID,
  handleGetAnalytics,
};
