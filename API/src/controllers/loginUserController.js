const User = require('../models/User');
const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const secret = process.env.SECRET;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar se todos os campos obrigatórios estão presentes
    if (!email || !password) {
      return res.status(422).json({ message: 'Email and password are required!' });
    }

    // Validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(422).json({ message: 'Invalid email format!' });
    }

    // Procurar o usuário pelo email no banco de dados
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    // Verificar se a senha fornecida corresponde à senha armazenada
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password!' });
    }

    // Gerar um token de autenticação
    const token = jwt.sign({ id: user._id }, secret);

    // Responder com sucesso e enviar o token
    res.status(200).json({ message: 'Authentication performed successfully!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred on the server!' });
  }
};

module.exports = { loginUser };
