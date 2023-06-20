const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(422).json({ message: 'Email and password are required!' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(422).json({ message: 'Invalid email format!' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password!' });
    }

    const token = jwt.sign({ id: user._id }, secret);

    res.status(200).json({ message: 'Authentication performed successfully!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred on the server!' });
  }
};

const updatePasswordUser = async (req, res) => {
  const userId = req.params.id;
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return res.status(422).json({ message: "Password and confirmation are required!" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ message: "Password and confirmation must match!" });
  }

  try {
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    await User.findByIdAndUpdate(userId, { password: passwordHash });

    res.status(200).json({ message: "User password updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateEmailUser = async (req, res) => {
  const userId = req.params.id;
  const { email } = req.body;

  if (!email) {
    return res.status(422).json({ message: "Email is required!" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(422).json({ message: "Please use another email!" });
    }

    await User.findByIdAndUpdate(userId, { email });

    res.status(200).json({ message: "User email successfully updated!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateNameUser = async (req, res) => {
  const userId = req.params.id;
  const { name } = req.body;

  if (!name) {
    return res.status(422).json({ message: "The name is required!" });
  }

  try {
    await User.findByIdAndUpdate(userId, { name });

    res.status(200).json({ message: "Username successfully updated!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  loginUser,
  updatePasswordUser,
  updateEmailUser,
  updateNameUser
};
