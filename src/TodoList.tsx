import React from "react";
import {FilterValueType, TaskType} from "./App";



type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void//пустота
    changeFilter: (newFilterValue: FilterValueType) => void
}

function TodoList (props: ToDoListPropsType){

    const tasks = props.tasks.map(t => {
        const removeTask = ()=> {props.removeTask(t.id)}
        return (
            <li key={t.id}>
                <input type={"checkbox"} checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })
    return (
<div>
    <h3>{props.title}</h3>
    <div>
        <input/>
        <button>+</button>
    </div>
    <ul>
        {tasks}
    </ul>

    <div>
        <button onClick={()=> { props.changeFilter ("all")}}>All</button>
        <button onClick={()=> { props.changeFilter ("active")}}>Active</button>
        <button onClick={()=>{ props.changeFilter ("completed")}}>Completed</button>
    </div>
</div>
);
}

export default TodoList;