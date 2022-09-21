import axios from "axios";
import {baseUrl} from "../configs/url";


const axiosService = axios.create({
    baseURL: baseUrl,
    headers: {}
});

export {
    axiosService
}