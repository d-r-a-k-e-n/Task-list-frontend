import axios from "axios";

export const createTask = async (title) => {
  try {
    await axios.post("https://task-list-backend-1.onrender.com/tasks/:userId",
      {
        title
      })
  } catch (error) {
    console.error("Error getting tasks", error)
  }
}

export const getTask = async () => {
  try {
    const response = await axios.get(
      // "https://task-list-backend-1.onrender.com/tasks"
      "http://localhost:3001/tasks"
    );
    return response.data;
  } catch (error) {
    console.error("Error getting tasks", error)
  }
}

export const updateTask = async (id, completed) => {
  try {
    await axios.put(`https://task-list-backend-1.onrender.com/tasks/${id}`, {
      completed: !completed
    });
  } catch (error) {
    console.error("Error update tasks", error)
  }
}

export const deleteTask = async (id) => {
  try {
    await axios.delete(
      `https://task-list-backend-1.onrender.com/tasks/${id}`
    );
  } catch (error) {
    console.error("Error deleting task", error)
  }
}
