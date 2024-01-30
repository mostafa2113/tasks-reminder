function TasksButtons({onDeleteAllTasks, onShowTasks}: {onDeleteAllTasks: ()=>void, onShowTasks: ()=>void}) {
    return (
        <div className="row justify-center p-5">
            <div className="flex justify-between">
                <button onClick={onShowTasks} className="border border-green-500 hover:text-white p-3 hover:bg-green-500">
                    عرض المهمات
                </button>
                <button onClick={onDeleteAllTasks} className="border border-red-500 hover:text-white p-3 hover:bg-red-500">
                    حذف كل المهمات
                </button>
            </div>
        </div>
    )
}
export default TasksButtons;