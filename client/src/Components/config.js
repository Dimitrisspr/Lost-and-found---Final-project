const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://finl.onrender.com";

export default API_URL;