import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/components.services";

const CheckPost = () => {
    const params = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAllById(params.id).then(value => setPost(value.data))
    }, [])



    return (
        <div>}
            {/*{JSON.stringify(post.filter(value => value.id = params.id))}*/}
        {/*    ????????????????????*/}
        </div>
    )
}

export {
    CheckPost
}