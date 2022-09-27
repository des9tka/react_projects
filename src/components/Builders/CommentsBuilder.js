import {Link, Outlet} from "react-router-dom";

const CommentsBuilder = ({comment}) => {
    return (
        <div className={'commentsWrap'}>
            <div>postId: {comment.postId}</div>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <div>body: {comment.body}</div>

            <Link to={'posts/' + comment.postId}>CheckPost</Link>
        </div>
    )
}

export {
    CommentsBuilder
}