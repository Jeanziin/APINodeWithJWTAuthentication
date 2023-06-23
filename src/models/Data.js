const mongoose = require('mongoose');
const User = require('./User');

const EventSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pdf: {
    type: String,
    required: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
});

const ProjectSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true
  },
  classmodel: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  discipline: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  student: {
    type: String,
    required: true
  }
});

const Event = mongoose.model('Event', EventSchema);
const Project = mongoose.model('Project', ProjectSchema);

module.exports = {
  Event,
  Project
};
