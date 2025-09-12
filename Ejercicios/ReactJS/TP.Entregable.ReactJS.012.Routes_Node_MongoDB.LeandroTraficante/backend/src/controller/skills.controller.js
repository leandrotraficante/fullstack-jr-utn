import skillsService from "../service/skills.service.js";

const getAllSkills = async (req, res) => {
    try {
        const skills = await skillsService.getAllSkills();
        res.status(200).json({ success: true, data: skills });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSkillById = async (req, res) => {
    const { skillId } = req.params;
    if (!skillId) {
        return res.status(400).json({ error: 'Skill ID is required' });
    }

    try {
        const skill = await skillsService.getSkillById(skillId);
        res.status(200).json({ success: true, data: skill });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createSkill = async (req, res) => {
    try {
        const skillData = req.body;
        const newSkill = await skillsService.createSkill(skillData);
        res.status(201).json({ success: true, data: newSkill });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateSkill = async (req, res) => {
    const { skillId } = req.params;
    if (!skillId) {
        return res.status(400).json({ error: 'Skill ID is required' });
    }

    try {
        const data = req.body;
        const updatedSkill = await skillsService.updateSkill(skillId, data);
        res.status(200).json({ success: true, data: updatedSkill });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteSkill = async (req, res) => {
    const { skillId } = req.params;
    if (!skillId) {
        return res.status(400).json({ error: 'Skill ID is required' });
    }

    try {
        const deletedSkill = await skillsService.deleteSkill(skillId);
        res.status(200).json({ success: true, data: deletedSkill });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export {
    getAllSkills,
    getSkillById,
    createSkill,
    updateSkill,
    deleteSkill
}