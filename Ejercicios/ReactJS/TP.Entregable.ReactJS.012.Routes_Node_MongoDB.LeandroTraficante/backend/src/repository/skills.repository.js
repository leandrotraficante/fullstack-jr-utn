import skillsModel from '../models/skills.model.js';

export default class SkillsRepository {
    getAllSkills = async () => {
        return await skillsModel.find().lean();
    };

    getSkillById = async (skillId) => {
        return await skillsModel.findById(skillId);
    };

    createSkill = async (skillData) => {
        return await skillsModel.create(skillData)
    };

    updateSkill = async (skillId, data) => {
        return await skillsModel.findByIdAndUpdate(skillId, data, {new: true}).lean();
    };

    deleteSkill = async (skillId) => {
        return await skillsModel.findByIdAndDelete(skillId);
    }
}