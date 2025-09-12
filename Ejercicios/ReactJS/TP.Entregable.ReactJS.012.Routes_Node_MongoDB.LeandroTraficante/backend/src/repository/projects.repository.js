import projectsModel from '../models/projects.model.js';

export default class ProjectsRepository {
    getAllProjects = async () => {
        return await projectsModel.find().lean();
    };

    getProjectById = async (projectId) => {
        return await projectsModel.findById(projectId).lean();
    };

    createProject = async (projectData) => {
        return await projectsModel.create(projectData);
    };

    updateProject = async (projectId, data) => {
        return await projectsModel.findByIdAndUpdate(projectId, data, {new: true}).lean();
    };

    deleteProject = async (projectId) => {
        return await projectsModel.findByIdAndDelete(projectId);
    };
}
