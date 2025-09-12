import express from 'express';
import {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} from '../controller/projects.controller.js';

const projectsRoutes = express.Router();

projectsRoutes.get('/', getAllProjects);
projectsRoutes.get('/:projectId', getProjectById);
projectsRoutes.post('/', createProject);
projectsRoutes.put('/:projectId', updateProject);
projectsRoutes.delete('/:projectId', deleteProject);

export default projectsRoutes;
