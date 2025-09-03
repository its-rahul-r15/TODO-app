import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header/Header";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


function CreateTodo() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/todo/add`, { text: title });
      navigate("/todos"); 
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 ">
      <div className="w-full ml-3 mr-3 bg-white shadow-lg rounded-2xl p-6 justify-center text-center">
      <h2 className="font-bold text-2xl mb-5">Create a New Todo</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          className="w-xl h-8 border-2 rounded p-2"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /> <br/>
        <button type="submit" className="bg-blue-700 hover:bg-blue-500 p-2 rounded-lg text-white cursor-pointer mt-5">Add Todo</button>
      </form>
      </div>
    </div>
    </>
  );
}

export default CreateTodo;
