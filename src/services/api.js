import axios from 'axios';

const api= axios.create({
    baseURL:'https://appteste-backend.herokuapp.com',
});

export default api;