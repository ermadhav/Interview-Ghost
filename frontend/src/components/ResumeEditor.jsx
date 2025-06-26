import React, { useState } from "react";
import SectionEditor from "./SectionEditor";
import { saveResume } from "../api";

const initialResume = {
  name: "John Doe",
  summary: "Experienced software developer...",
  experience: "Company X (2020–2023)",
  education: "B.Tech in Computer Science",
  skills: "React, Node.js, MongoDB"
};

export default function ResumeEditor() {
  const [resume, setResume] = useState(initialResume);

  const handleChange = (section, value) => {
    setResume({ ...resume, [section]: value });
  };

  const handleSave = async () => {
    await saveResume(resume);
    alert("Resume saved to MongoDB!");
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
  };

  return (
    <div>
      <h2>Resume Editor</h2>
      {Object.keys(resume).map((section) => (
        <SectionEditor
          key={section}
          section={section}
          data={resume[section]}
          onChange={(val) => handleChange(section, val)}
        />
      ))}
      <button onClick={handleSave}>Save to Database</button>
      <button onClick={handleDownload}>Download JSON</button>
    </div>
  );
}
