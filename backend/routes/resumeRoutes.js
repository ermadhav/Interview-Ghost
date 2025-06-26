const express = require("express");
const router = express.Router();
const {
  enhanceSection,
  saveResume,
  getAllResumes,
} = require("../controllers/resumeController");

router.post("/ai-enhance", enhanceSection);
router.post("/save-resume", saveResume);
router.get("/resumes", getAllResumes);

module.exports = router;
