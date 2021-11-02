import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-type": "application/json"
  }
});