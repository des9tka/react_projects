const TodosBuilder = ({todo}) => {
    return (
        <div className={'todosWrap'}>
            <div>userId: {todo.userId}</div>
            <div>id: {todo.id}</div>
            <div>title: {todo.title}</div>
            <div>completed: {todo.completed.toString()}</div>
        </div>
    )
}

export {
    TodosBuilder
}