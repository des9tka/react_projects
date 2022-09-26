import axios from "axios";
import {baseUrl} from "../config/url";

const axiosService = axios.create({
    baseURL: baseUrl,
    headers: {}
})

export {
    axiosService
}