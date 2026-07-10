import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

function Home() {

    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await API.get("/tasks");
            setTasks(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const addTask = async (task) => {
        try {
            await API.post("/tasks", task);
            fetchTasks();
        } catch (err) {
            console.log(err);
        }
    };

    const updateTask = async (id, task) => {
        try {
            await API.put(`/tasks/${id}`, task);
            setEditingTask(null);
            fetchTasks();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await API.delete(`/tasks/${id}`);
            fetchTasks();
        } catch (err) {
            console.log(err);
        }
    };

    const toggleComplete = async (task) => {
        try {
            await API.put(`/tasks/${task._id}`, {
                completed: !task.completed,
            });

            fetchTasks();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navbar />

            <div className="container">

                <TaskForm
                    addTask={addTask}
                    updateTask={updateTask}
                    editingTask={editingTask}
                />

                {tasks.length === 0 ? (
                    <h4 className="text-center">
                        No Tasks Found
                    </h4>
                ) : (
                    tasks.map((task) => (
                        <TaskItem
                            key={task._id}
                            task={task}
                            deleteTask={deleteTask}
                            editTask={setEditingTask}
                            toggleComplete={toggleComplete}
                        />
                    ))
                )}

            </div>
        </>
    );
}

export default Home;
