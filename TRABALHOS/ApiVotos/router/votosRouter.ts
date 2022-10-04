const router = require('express').Router();

const VoteController = require('../controller/VoteController');

router.get("/votes", VoteController.index);
router.post("/vote", VoteController.create);

module.exports = router;
