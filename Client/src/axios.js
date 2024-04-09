import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:8888',
    withCredentials: true
});
//https://cnpmapi.azurewebsites.net
instance.interceptors.response.use(
    (response) => {
        // Thrown error for request with OK status code
        const { data } = response;
        return response.data;
    }
);

export default instance;