const userRouter = require("express").Router();
const User = require("../models/User");
const User = require("../models/Message");
const verifyToken = require("./verifyToken");

userRouter.get("/", verifyToken, async (req, res) => {
  const allUsers = await User.find({});
  if (!allUsers) {
    return res.status(400).send("Error getting users");
  }
  res.json({ allUsers });
});

userRouter.get("/:id", verifyToken, async (req, res) => {
  const getUser = await User.findById(req.params.id);
  if (!getUser) {
    return res.status(400).send("Error getting user");
  }
  res.json({ getUser });
});

userRouter.get("/:id/messages", verifyToken, async (req, res) => {
  const getMessagesByUser = await User.findById(req.params.id)
    .populate("id_user")
    .exec();

  if (!getMessagesByUser) {
    return res.status(400).send("Error getting user messages");
  }

  res.json({ getMessagesByUser });
});
