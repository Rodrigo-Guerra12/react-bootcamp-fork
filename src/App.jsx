import classes from "./app.module.css";
import { useState, useEffect } from "react";
import TaskList from "./Components/TaskList";
import { Filter } from "./Components/Filter/Filter";
import CardForm from "./Components/AddTaskForm/CardForm";

function App() {
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [tasks, setTasks] = useState([]);
  function filterTasks(filtercriterial) {
    let filteredTasks;

    if (filtercriterial === 0) {
      filteredTasks = tasks.filter((e) => e.isCompleted === false);
    }
    if (filtercriterial === 1) {
      filteredTasks = tasks.filter((e) => e.isCompleted === true);
    }
    if (filtercriterial === 2) {
      filteredTasks = tasks;
    }
    console.log("Me ejecuto", filteredTasks);
    setFilteredTaskList(filteredTasks);
  }

  const url = "http://localhost:3000/tasks";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setTasks(jsonData);
      setFilteredTaskList(jsonData);
    } catch (error) {
      console.log("Error al traer datos desde Mocki:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Filter filterHandler={filterTasks} />
      <div className={classes.App}>
        {tasks.length > 0 && <TaskList tasks={filteredTaskList} />}
      </div>
      <CardForm />
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
