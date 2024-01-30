import './App.css'
import tasksData from "./Dummy Data/data.ts";
import DatesCount from "./components/DatesCount.tsx";
import TasksList from "./components/TasksList.tsx";
import TasksButtons from "./components/TasksButtons.tsx";
import {useState} from "react";
import ITask from "./interfaces/ITask.tsx";


function App(){
    const [tasks, setTasks] = useState<ITask[]>(tasksData)
    const onDeleteAllTasks = () => {
        setTasks([])
    }
    const onShowTasks = () => {
        setTasks(tasksData)
    }
    return (
        <main className="bg-sky-100 min-h-[100vh]">
            <div className="container mx-auto py-5">
                <DatesCount tasks={tasks}/>
                <TasksList tasks={tasks}/>
                <TasksButtons onDeleteAllTasks={onDeleteAllTasks} onShowTasks={onShowTasks}/>
            </div>
        </main>
  )
}

export default App;
