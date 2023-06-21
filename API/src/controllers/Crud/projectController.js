const { Project } = require('../../models/Data');

const createProject = async (req, res) => {
  try {
    const { course, classmodel, period, discipline, teacher, student } = req.body;

    if (!course || !classmodel || !period || !discipline || !teacher || !student ) {
      return res.status(400).json({ message: 'All required fields must be provided.' });
    }

    const project = {
      course,
      classmodel,
      period,
      discipline,
      teacher,
      student
    };

    await Project.create(project);
    res.status(201).json({ message: 'Data successfully registered in the system!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getProject = async (req, res) => {
    try {
      const Projects = await Project.find();
  
      if (Projects.length === 0) {
        return res.status(404).json({ message: 'No Projects found.' });
      }
  
      res.status(200).json({ Projects });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };


  const getProjectById = async (req, res) => {
    const projectId = req.params.id;
  
    try {
      if (!projectId) {
        return res.status(400).json({ message: 'Project ID must be provided.' });
      }
  
      // Verificar se o ID é um formato válido
      if (!isValidId(projectId)) {
        return res.status(400).json({ message: 'Invalid Project ID.' });
      }
  
      const project = await Project.findById(projectId);
  
      if (!project) {
        return res.status(404).json({ message: 'Project not found.' });
      }
  
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const isValidId = (id) => {
    return /^[0-9a-fA-F]{24}$/.test(id);
  };
  
  
  
    const UpdateProjectbyId = async (req, res) => {
        try {
          const updateId = req.params.id;
          const { course, classmodel, period, discipline, teacher, student } = req.body;
      
          const updateProject = {
            course,
            classmodel,
            period,
            discipline,
            teacher,
            student,
          };
      
          const update = await Project.updateOne({ _id: updateId }, updateProject);
      
          if (update.nModified === 0) {
            return res.status(404).json({ message: 'Project not found' });
          }
          if(update){
            res.status(200).json({message: 'Project successfully updated'});
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
      

    const deleteProject = async (req, res) => {
      try {
        const deleteId = req.params.id;
    
        const data = await Project.deleteOne({ _id: deleteId });
    
        if (!data.deletedCount) {
          return res.status(404).json({ message: 'user not found' });
        }
    
        res.status(200).json({ message: 'deleted user!' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
    



module.exports = {
  createProject,
  getProject,
  getProjectById,
  UpdateProjectbyId,
  deleteProject
};
