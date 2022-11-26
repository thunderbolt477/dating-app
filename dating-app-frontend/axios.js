import axios from "axios";

const instance = axios.create({
  URL: "http://localhost:8001",
});

export default instance;
