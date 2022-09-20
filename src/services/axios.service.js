import axios from "axios";
import {url} from '../dataSrc/url'

const axiosBeg = axios.create({
    baseURL: url,
    headers: {}
})

export function axiosGet () {
    return axiosBeg.get();
}

