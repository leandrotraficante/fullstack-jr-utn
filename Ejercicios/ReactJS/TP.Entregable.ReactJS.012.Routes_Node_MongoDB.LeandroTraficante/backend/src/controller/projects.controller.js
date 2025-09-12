import projectsService from "../service/projects.service.js";

const getAllProjects = async (req, res) => {
    try {
        const projects = await projectsService.getAllProjects();
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProjectById = async (req, res) => {
    const { projectId } = req.params;
    if (!projectId) {
        return res.status(400).json({ error: 'Project ID is required' });
    }

    try {
        const project = await projectsService.getProjectById(projectId);
        res.status(200).json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProject = async (req, res) => {
    try {
        const projectData = req.body;
        const newProject = await projectsService.createProject(projectData);
        res.status(201).json({ success: true, data: newProject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateProject = async (req, res) => {
    const { projectId } = req.params;
    if (!projectId) {
        return res.status(400).json({ error: 'Project ID is required' });
    }

    try {
        const data = req.body;
        const updatedProject = await projectsService.updateProject(projectId, data);
        res.status(200).json({ success: true, data: updatedProject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteProject = async (req, res) => {
    const { projectId } = req.params;
    if (!projectId) {
        return res.status(400).json({ error: 'Project ID is required' });
    }

    try {
        const deletedProject = await projectsService.deleteProject(projectId);
        res.status(200).json({ success: true, data: deletedProject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
