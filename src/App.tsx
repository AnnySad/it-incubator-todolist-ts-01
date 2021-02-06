import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValueType=  "all" | "active" | "completed"

function App() {
    //BLL:
    const array = useState<Array<TaskType>>([
//выполняет ф-цию state
        {id: 1, title: "JS", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: true},
    ])

    const tasks = array[0] // state
    const setTasks = array[1] // function

    const [filter, setFilter] = useState<FilterValueType>("completed")


    function removeTask(taskID: number) {//2
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    // то,же самое...
    // function removeTask(taskID: number) {//2
    //    let newState = tasks.filter(t => t.id !== taskID)
    //     setTasks(newState)
    //     }


    function changeFilter(newFilterValue: FilterValueType) {
        setFilter(newFilterValue)
    }


    let tasksForTodoList = tasks
    if(filter === "active") {
        tasksForTodoList = tasks.filter(t=> t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t=> t.isDone === true);
    }


// UI-юзер интерфейс
    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>)
}

export default App;
