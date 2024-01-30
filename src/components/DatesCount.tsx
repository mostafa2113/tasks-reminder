import ITask from "../interfaces/ITask.tsx";

function DatesCount({tasks}:{tasks:ITask[]}) {
    return (
        <div className="row justify-center my-4 p-5">
            لديك
            <span className="text-red-500"> {tasks.length} </span>
            مهام لتنفيذها
        </div>
    )
}
export default DatesCount;