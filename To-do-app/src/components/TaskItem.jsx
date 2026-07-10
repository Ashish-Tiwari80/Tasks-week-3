function TaskItem({
    task,
    deleteTask,
    editTask,
    toggleComplete,
}) {
    return (
        <div className="card mb-3">

            <div className="card-body">

                <h5>
                    {task.title}
                </h5>

                <p>
                    {task.description}
                </p>

                <p>
                    Status :
                    <span
                        className={
                            task.completed
                                ? "text-success"
                                : "text-danger"
                        }
                    >
                        {task.completed ? " Completed" : " Pending"}
                    </span>
                </p>

                <button
                    className="btn btn-success me-2"
                    onClick={() => toggleComplete(task)}
                >
                    Toggle
                </button>

                <button
                    className="btn btn-warning me-2"
                    onClick={() => editTask(task)}
                >
                    Edit
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task._id)}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskItem;
