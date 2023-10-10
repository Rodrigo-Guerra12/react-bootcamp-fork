/* eslint-disable react/prop-types */
import classes from "./TaskList.module.css";
import Container from "@mui/material/Container";

const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <>
      {" "}
      <Container maxWidth="md">
        <div className={classes.TaskList}>
          <ul>
            {tasks.map((taskItem) => {
              return <li key={taskItem.Id}>{taskItem.description}</li>;
            })}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default TaskList;
