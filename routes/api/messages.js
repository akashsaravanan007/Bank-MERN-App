const express = require("express");
const router = express.Router();

const Message = require("../../models/Message");

router.get("/", (req, res) => {
  Message.find()
    .sort({ date: -1 })
    .then((message) => res.json(message));
});

router.post("/", (req, res) => {
  const newMessage = new Message({
    name: req.body.name,
    email: req.body.email,
    select: req.body.select,
    message: req.body.message,
  });
  newMessage.save().then((message) => res.json(message));
});

module.exports = router;
