import ITask from "../interfaces/ITask.tsx";

function TaskCard({task}:{task:ITask}) {
    return (
        <div className="border-b border-b-gray-400 flex py-3 gap-1">
            <img className="h-[64px] w-[64px] rounded-full" src={task.image} alt="this person dosen't exist"/>
            <div>
                <p className="text-xl font-bold">{`${task.title} ${task.id}`}</p>
                <p className="text-gray-500">تاريخ الانشاء: {task.date}</p>
            </div>
        </div>
    )
}

export default TaskCard;