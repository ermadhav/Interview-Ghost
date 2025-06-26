import axios from "axios";

const API = "http://localhost:5000/api";

export const enhanceSection = (section, content) =>
  axios.post(`${API}/ai-enhance`, { section, content });

export const saveResume = (resume) =>
  axios.post(`${API}/save-resume`, resume);

export const fetchResumes = () => axios.get(`${API}/resumes`);
