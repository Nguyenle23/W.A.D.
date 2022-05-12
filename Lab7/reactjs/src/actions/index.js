import axios from 'axios';
import { API_URL } from '../utilities/constants.js';


export const studentLogin = async(data) => {
    console.log(data);
    const request = await axios.post(`${API_URL}/login`, data);
    console.log(request.data);
    return request;
}