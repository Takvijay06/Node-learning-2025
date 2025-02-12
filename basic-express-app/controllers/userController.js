const UserService = require("../services/userService");


class UserController {
    static getAllUsers(req, res) {
      res.status(200).json(UserService.getAllUsers());
    }
  
    static getUserById(req, res) {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
  
      const user = UserService.getUserbyId(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    }
  
    static createUser(req, res) {
      const { name, email } = req.body;
      const newUser = UserService.createUser(name, email);
      res.status(201).json({ message: "User created successfully", newUser });
    }
  
    static updateUser(req, res) {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
  
      const updatedUser = UserService.updateUser(userId, req.body.name, req.body.email);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ message: "User updated successfully", user: updatedUser });
    }
  
    static deleteUser(req, res) {
      const userId = parseInt(req.params.id);
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
  
      const isDeleted = UserService.deleteUser(userId);
      if (!isDeleted) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json({ message: "User deleted successfully" });
    }
  }
  
  module.exports = UserController;