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
    
        // Verificar se o ID é um formato válido
        if (!isValidId(eventId)) {
          return res.status(400).json({ message: 'Invalid Event ID.' });
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
    
    const isValidId = (id) => {
      const isValidObjectId = /^[0-9a-fA-F]{24}$/.test(id);
      return isValidObjectId;
    };
    
  
const UpdateEventbyId = async (req, res) => {
    const updateId = req.params.id;
    const { area, title, authors, type, teacher, startDate, email, pdf } = req.body;

    const updateEvent = {
      area,
      title,
      authors,
      type,
      teacher,
      startDate,
      email,
      pdf,
    };
    

    try {

      const update = await Event.updateOne({ _id: updateId }, updateEvent);
      
      res.status(200).json(update)

    }catch(error){
      res.status(500).json({error: error});
    
    }
}

    const deleteEvent = async (req, res) => {
      try {
        const deleteId = req.params.id;
    
        const data = await Event.deleteOne({ _id: deleteId });
    
        if (!data.deletedCount) {
          return res.status(404).json({ message: 'user not found' });
        }
    
        res.status(200).json({ message: 'deleted user!' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    



module.exports = {
  createEvent,
  getEvent,
  getEventById,
  UpdateEventbyId,
  deleteEvent
};
