const router = require("express").Router();
const { getAllUsers, createNewUser, deleteUser } = require("../models/models");

router.get("/getAllUsers", async (req, res) => {
  const data = await getAllUsers();
  res.json(data);
});

router.post("/createUser", async (req, res) => {
  const data = await createNewUser("not", "Red");
  res.json(data);
});

router.delete("/deleteUser", async (req, res) => {
  const data = await deleteUser("Conor");
  res.json(data);
});

module.exports = router;
