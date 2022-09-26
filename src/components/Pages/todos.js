import {todosService} from "../../services/components.services";
import {useEffect, useState} from "react";

import {TodosBuilder} from "../Builders/TodosBuilder";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(value => setTodos(value.data))
    }, [])

    return (
        <div>
            <br/>
            TODOS
            <br/>
            <br/>
            {todos.map(value => <TodosBuilder todo={value} key={value.id}/>)}
        </div>
    )
}

export {
    Todos
}