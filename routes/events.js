var express = require('express');
var router = express.Router();

const eventsCtrl = require("../controllers/events");

router.get("/", eventsCtrl.index);
router.get("/new", eventsCtrl.new);
router.post("/", eventsCtrl.create);
router.get("/:id", eventsCtrl.show);
router.get("/edit/:id", eventsCtrl.edit);
router.put("/:id", eventsCtrl.update);
router.delete("/:id", eventsCtrl.delete);

module.exports = router;
