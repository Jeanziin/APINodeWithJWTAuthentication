const { Event } = require('../../models/Data');

const createEvent = async (req, res) => {
  try {
    const { area, title, authors, type, teacher, startDate, email, pdf } = req.body;

    if (!area || !title || !authors || !type || !teacher || !startDate || !email) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const event = {
      area,
      title,
      authors,
      type,
      teacher,
      startDate,
      email,
      pdf,
    };

    await Event.create(event);
    res.status(201).json({ message: 'Data successfully registered in the system!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getEvent = async (req, res) => {
    try {
      const events = await Event.find();
  
      if (events.length === 0) {
        return res.status(404).json({ message: 'No events found.' });
      }
  
      res.status(200).json({ events });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  const getEventById = async (req, res) => {
    const eventId = req.params.id;
  
    try {
      if (!eventId) {
        return res.status(400).json({ message: 'Event ID must be provided.' });
      }
  
      const event = await Event.findOne({ _id: eventId });
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found.' });
      }
  
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

module.exports = {
  createEvent,
  getEvent,
  getEventById
};
