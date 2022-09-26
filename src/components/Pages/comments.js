import {useEffect, useState} from "react";

import {commentsService} from "../../services/components.services";
import {CommentsBuilder} from "../Builders/CommentsBuilder";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data))
    }, [])


    return (
        <div>
            <br/>
            COMMENTS
            <br/>
            <br/>
            {comments.map(value => <CommentsBuilder comment={value} key={value.id}/>)}
        </div>
    )
}

export {
    Comments
}