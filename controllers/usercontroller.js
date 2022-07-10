const router = require("express").Router();
const { UserModel } = require("../models");

router.post("/register", async (req, res) => {
  let { email, password } = req.body.user;

  await UserModel.create({
    email,
    password,
  });

  res.status(201).json({
    message: "User successully registered",
    user: User,
  });
});

module.exports = router;
