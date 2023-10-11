/* eslint-disable react/prop-types */
import classes from "./TaskList.module.css";
import Container from "@mui/material/Container";
import { Task } from "./Task/Task";

const TaskList = ({ tasks }) => {
  console.log("esto es una task", tasks);
  return (
    <>
      {" "}
      <Container maxWidth="md">
        <div className={classes.TaskList}>
          <ul>
            {tasks.map((taskItem) => {
              return (
                <li key={taskItem.Id}>
                  <Task task={taskItem} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default TaskList;
