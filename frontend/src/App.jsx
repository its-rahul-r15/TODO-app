import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import {Routes, Route } from "react-router-dom";
import TodoList from './components/TodoItem';
import CreateTodo from './components/TodoForm';

function App() {

  return (
    <>

   
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/todos" element={<TodoList/>} /> 
        <Route path='/createTodo' element={<CreateTodo />} />
      </Routes>
    
    
      

     


    </>
  )
}

export default App
