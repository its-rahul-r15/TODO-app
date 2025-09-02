import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header/Header";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function TodoList() {

   const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/todo`) // backend se data
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${backendUrl}/api/todo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id)); // frontend state update
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const handleToggleComplete = async (id, currentStatus) => {
  try {
    const { data } = await axios.put(`${backendUrl}/api/todo/${id}`, {
      completed: !currentStatus,   // toggle
    });

    // update state
    setTodos(todos.map((todo) => (todo._id === id ? data : todo)));
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

  return (
   
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full ml-3 mr-3 bg-white justify-center items-center shadow-lg rounded-2xl p-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-center mb-6">📋 My Todo List</h1>
        <button onClick={()=> navigate('/createTodo')} className="bg-red-500 text-white p-[10px] rounded-lg hover:bg-red-600">Add</button>
        </div>
        <ul className="space-y-4 text-center items-center justify-center gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center bg-gray-50 shadow-sm p-4 rounded-xl hover:shadow-md transition w-[300px] h-[100px] mt-3"
            >
              <span className="text-lg font-medium text-gray-700">
                {todo.text}
              </span>

              <input
  type="checkbox"
  checked={todo.completed}
  onChange={() => handleToggleComplete(todo._id, todo.completed)}
/>
              <button onClick={() => deleteTodo(todo._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default TodoList;
