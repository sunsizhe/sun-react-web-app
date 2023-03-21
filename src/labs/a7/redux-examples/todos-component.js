import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector(state => state.todos); //retrieve todos from reducer state and assign to local todos const
    const [todo, setTodo] = useState({do: ''}); //create todo local state variable
    const todoChangeHandler = (event) => {                //handle keystroke changes in input field
        const doValue = event.target.value;               //get data from input field
        const newTodo = {                                 //set todo's do property
            do: doValue
        };
        setTodo(newTodo);                                  //change local state todo variable
    }
    const dispatch = useDispatch();   //get distacher to invoke reducer functions
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    const deleteTodoClickHandler = () => {
        dispatch(deleteTodo(todo))
    }
    const toggleTodoDone = (todo) => {  //accept todo index
        dispatch(todoDoneToggle(todo))
    }
    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>
                    <input onChange={todoChangeHandler}      //add a new line item at the top
                           value={todo.do}                   //containing an input field to type todo
                           className="form-control w-75"/>
                </li>
            </ul>
            <ul className="list-group"> {
                todos.map((todo, index) =>
                <li className="list-group-item">
                    <button onClick={() => deleteTodoClickHandler(index)}
                    className="btn btn-danger float-end ms-2">
                        Delete
                    </button>
                    <input type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(todo)} className="me-2"/>
                    {todo.do}
                </li>
            )}
            </ul>
        </>
    );
};

export default Todos;