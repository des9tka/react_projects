import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/components.services";

const CheckPost = () => {
    const params = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAllById(params.id).then(value => setPost(value.data))
    }, [params.id])

    return (
        <div className={'postWrap'}>
            <h3>{post.id} - {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export {
    CheckPost
}