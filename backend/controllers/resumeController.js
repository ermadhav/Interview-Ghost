const Resume = require("../models/Resume");

exports.enhanceSection = (req, res) => {
  const { section, content } = req.body;
  const enhanced = `✨ Enhanced: ${content}`;
  res.json({ enhanced_content: enhanced });
};

exports.saveResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.json({ message: "Resume saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
