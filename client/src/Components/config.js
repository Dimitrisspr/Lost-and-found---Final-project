const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://one1-6.onrender.com";

export default API_URL;