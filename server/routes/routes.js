const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ root: "/root" });
});

router.get("/:pokemon", (req, res, next) => {
  const params = req.params;
  res.status(200).json({ pokemon: params });
});

module.exports = router;
