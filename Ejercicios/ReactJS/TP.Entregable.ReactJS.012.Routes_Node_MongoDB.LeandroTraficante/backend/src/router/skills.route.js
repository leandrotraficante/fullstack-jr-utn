import express from 'express';
import {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
} from '../controller/skills.controller.js' ;

const skillsRoutes = express.Router();

skillsRoutes.get('/', getAllSkills);
skillsRoutes.get('/:skillId', getSkillById);
skillsRoutes.post('/', createSkill);
skillsRoutes.put('/:skillId', updateSkill);
skillsRoutes.delete('/:skillId', deleteSkill);

export default skillsRoutes;