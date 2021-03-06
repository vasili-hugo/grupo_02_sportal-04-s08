var express = require('express');
var router = express.Router();
const controllerApi = require("../../controllers/api/productosApiCtrl.js");

// APIs
router.get("/searchAll", controllerApi.searchAllProducts);
router.get("/search", controllerApi.searchProducts);
router.get("/total", controllerApi.totalByCategory);
router.get("/", controllerApi.allProducts);
router.get("/:id", controllerApi.oneProduct);

module.exports = router;