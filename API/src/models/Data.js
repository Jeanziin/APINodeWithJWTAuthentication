const mongoose = require('mongoose');

const Event = mongoose.model('event', {
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
  }

});

const Project = mongoose.model('project',{
  course: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
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
  },
 
});

module.exports = {
  Event,
  Project
};
