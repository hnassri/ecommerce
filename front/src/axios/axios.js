import axios from "axios";

const instance = axios.create({baseURL: "http://localhost:8000"}); // http://206.81.25.252:8000 : server de moha

export default instance;