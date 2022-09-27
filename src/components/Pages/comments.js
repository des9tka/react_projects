import {useEffect, useState} from "react";

import {commentsService} from "../../services/components.services";
import {CommentsBuilder} from "../Builders/CommentsBuilder";
import {Outlet} from "react-router-dom";

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
            <hr/>
            <Outlet/>
            <hr/>
            <br/>
            {comments.map(value => <CommentsBuilder comment={value} key={value.id}/>)}
        </div>
    )
}

export {
    Comments
}