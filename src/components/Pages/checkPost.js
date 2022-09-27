import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/components.services";
import {axiosService} from "../../services/axios.service";

const CheckPost = () => {
    const params = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAllById(params.id).then(value => setPost(value.data))
        // axiosService.get(`/posts/${params.id}`).then(value => setPost(value.data))
    }, [params.id])

    return (
        <div>
            {console.log(post) }
        </div>
    )
}

export {
    CheckPost
}