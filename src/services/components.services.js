import {axiosService} from "./axios.service";
import {urls} from "../config/url";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}

const postService = {
    getAllById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    todosService, albumsService, commentsService, postService
}