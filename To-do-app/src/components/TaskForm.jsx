import { useState, useEffect } from "react";

function TaskForm({ addTask, updateTask, editingTask }) {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        if (editingTask) {
            setTask({
                title: editingTask.title,
                description: editingTask.description,
            });
        } else {
            setTask({
                title: "",
                description: "",
            });
        }
    }, [editingTask]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingTask) {
            updateTask(editingTask._id, task);
        } else {
            addTask(task);
        }

        setTask({
            title: "",
            description: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="card p-3 mb-4">

            <input
                className="form-control mb-3"
                placeholder="Task Title"
                name="title"
                value={task.title}
                onChange={handleChange}
                required
            />

            <textarea
                className="form-control mb-3"
                placeholder="Description"
                name="description"
                value={task.description}
                onChange={handleChange}
            />

            <button className="btn btn-primary">
                {editingTask ? "Update Task" : "Add Task"}
            </button>

        </form>
    );
}

export default TaskForm;
