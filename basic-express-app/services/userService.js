const users = require("../database");

class UserService {
  static getAllUsers() {
    return users;
  }

  static getUserbyId(id) {
    return users.find((user) => user.id === id);
  }

  static createUser(name, email) {
    const newId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
    const newUser = { id: newId, name, email };
    users.push(newUser);
    return newUser;
  }

  static updateUser(userId, name, email) {
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) return null;

    users[userIndex] = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      email: email || users[userIndex].email,
    };
    return users[userIndex];
  }

  static deleteUser(userId) {
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) return false;

    users.splice(userIndex, 1);
    return true;
  }
}

module.exports = UserService;