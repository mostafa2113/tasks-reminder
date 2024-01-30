import ITask from "../interfaces/ITask.tsx";
import TaskCard from "./TaskCard.tsx";
function TasksList({tasks}: { tasks: ITask[]}) {
    return (
        <div className="row justify-center my-4 p-5">
            <div className="shadow rounded-2xl shadow-gray-400 p-6 min-h-[20vh]">
                {tasks.length > 0 ? tasks.map((task: ITask) => (
                    <TaskCard key={task.id} task={task}/>
                )) : <div className="text-center text-2xl text-gray-500">لا يوجد مهام</div>}
            </div>
        </div>
    )
}

export default TasksList;