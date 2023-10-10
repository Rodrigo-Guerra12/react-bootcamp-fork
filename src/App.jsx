import { useState, useEffect } from "react";
import TaskList from "./Components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const url = "http://localhost:3000/tasks";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setTasks(jsonData);
    } catch (error) {
      console.log("Error al traer datos desde Mocki:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;

// ejemplo de estructura

// import React from 'react';
// import { TaskProvider } from './context/TaskContext.jsx';
// import TaskList from './components/TaskList.jsx';
// import AddTaskForm from './components/AddTaskForm.jsx';
// import Filter from './components/Filter.jsx';

// const App = () => {
//   return (
//     <TaskProvider>
//       <AddTaskForm />
//       <Filter />
//       <TaskList />
//     </TaskProvider>
//   );
// };

// export default App;
