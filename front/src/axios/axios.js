import axios from "axios";

const instance = axios.create({baseURL: "http://206.81.25.252:8000"});

export default instance;