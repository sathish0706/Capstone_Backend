const express = require("express");
const {
  postQuery,
  getQuery,
  getQueryById,
} = require("../Controllers/query.controllers");
const { isAuth } = require("../utils/auth");

const router = express.Router();

router.post("/post/query", postQuery);

router.get("/get/query", getQuery);

router.get("/get/query/:id", isAuth, getQueryById);

module.exports = router;
