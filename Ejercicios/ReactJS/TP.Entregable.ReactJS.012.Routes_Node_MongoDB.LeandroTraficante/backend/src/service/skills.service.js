import SkillsRepository from "../repository/skills.repository.js";

const skillsRepository = new SkillsRepository();

const getAllSkills = async () => {
    const skills = await skillsRepository.getAllSkills();
    return skills;
};

const getSkillById = async (skillId) => {
    if (!skillId) {
        throw new Error('ID de skill requerido');
    }

    const skillById = await skillsRepository.getSkillById(skillId);

    if (!skillById) {
        throw new Error('Skill no encontrado');
    }

    return skillById;
};

const createSkill = async (skillData) => {
    if (!skillData.name || !skillData.category || !skillData.description) {
        throw new Error('Name, category y description son requeridos');
    }

    const newSkill = await skillsRepository.createSkill(skillData);
    return newSkill;
};

const updateSkill = async (skillId, data) => {
    if (!skillId) {
        throw new Error('ID de skill requerido');
    }

    if (!data || Object.keys(data).length === 0) {
        throw new Error('Datos para actualizar requeridos');
    }

    const skillToUpdate = await skillsRepository.updateSkill(skillId, data)
    return skillToUpdate;
};

const deleteSkill = async (skillId) => {
    if (!skillId) {
        throw new Error('ID de skill requerido');
    }

    const skillToDelete = await skillsRepository.deleteSkill(skillId);
    return skillToDelete;
}



export default {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
}