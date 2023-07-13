const mongoose = require('mongoose');
const UploadFile = require('./UploadFile');

const UserSchema = new mongoose.Schema({
  nameUser: String,
  email: String,
  office: String,
  telephone: String,
  password: String,
  authAdmin: {
    type: Boolean,
    default: false,
  },
  record: String,
  graduation: String,
  LevelofEducation: String,
  file: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UploadFile',
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
