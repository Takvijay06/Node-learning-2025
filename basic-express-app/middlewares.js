const users = require("./database");

const validateEmptyUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }
  next();
};


const validateAlreadyUser = (req, res, next) => {
    const { email } = req.body;
    const user = users.find((user) => user.email === email);
    if (user) {
      return res.status(400).json({ message: "User already exists..." });
    }
    next();
  };


module.exports = {
  validateEmptyUser,
  validateAlreadyUser
};
