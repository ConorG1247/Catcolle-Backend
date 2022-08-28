const { userData } = require("../schema/schema.js");

const getAllUsers = async () => {
  const data = await userData.find();
  let users = [];
  data.forEach((user) => {
    users.push(user.username.toLocaleLowerCase());
  });
  return users;
};

const createNewUser = async (username, theme) => {
  const userExistsCheck = await userData.findOne({ username: username });

  if (userExistsCheck) {
    return `${username} already exists.`;
  }

  const data = await userData.create({
    username: username,
    theme: theme,
  });
  return data;
};

const deleteUser = async (username) => {
  const data = await userData.deleteOne({
    username: username,
  });

  if (data.deletedCount === 0) {
    return `Couldn't find ${username}. `;
  }
  return `${username} deleted.`;
};

module.exports = { getAllUsers, createNewUser, deleteUser };
