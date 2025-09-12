import ProjectsRepository from "../repository/projects.repository.js";

const projectsRepository = new ProjectsRepository();

const getAllProjects = async () => {
    const projects = await projectsRepository.getAllProjects();
    return projects;
};

const getProjectById = async (projectId) => {
    if (!projectId) {
        throw new Error('ID de project requerido');
    }

    const projectById = await projectsRepository.getProjectById(projectId);

    if (!projectById) {
        throw new Error('Project no encontrado');
    }

    return projectById;
};

const createProject = async (projectData) => {
    if (!projectData.name || !projectData.category || !projectData.description || !projectData.technologies) {
        throw new Error('Name, category, description y technologies son requeridos');
    }

    const newProject = await projectsRepository.createProject(projectData);
    return newProject;
};

const updateProject = async (projectId, data) => {
    if (!projectId) {
        throw new Error('ID de project requerido');
    }

    if (!data || Object.keys(data).length === 0) {
        throw new Error('Datos para actualizar requeridos');
    }

    const projectToUpdate = await projectsRepository.updateProject(projectId, data);
    return projectToUpdate;
};

const deleteProject = async (projectId) => {
    if (!projectId) {
        throw new Error('ID de project requerido');
    }

    const projectToDelete = await projectsRepository.deleteProject(projectId);
    return projectToDelete;
};

export default {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
};
