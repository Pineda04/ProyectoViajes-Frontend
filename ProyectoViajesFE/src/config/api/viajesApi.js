import axios from "axios";

const API_URL = 'https://localhost:7084/api';

const viajesApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type" : "application/json"
    },
});

export {
    viajesApi,
    API_URL
}