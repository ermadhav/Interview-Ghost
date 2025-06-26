import React, { useState } from "react";
import { enhanceSection } from "../api";

export default function SectionEditor({ section, data, onChange }) {
  const [content, setContent] = useState(data);

  const handleEnhance = async () => {
    const res = await enhanceSection(section, content);
    setContent(res.data.enhanced_content);
    onChange(res.data.enhanced_content);
  };

  return (
    <div className="section">
      <label>{section}</label>
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          onChange(e.target.value);
        }}
      />
      <button onClick={handleEnhance}>Enhance with AI</button>
    </div>
  );
}
