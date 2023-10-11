/* eslint-disable react/prop-types */
// import classes from "./Task.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import ContainedButtons from "./Button";
import { ControlledCheckbox } from "./Checkbox";

export const Task = ({ task }) => {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
        <h1>{task.description}</h1>
        <h2>
          Completada <ControlledCheckbox isCompleted={task.isCompleted} />
        </h2>
      </CardContent>
      <CardActions>
        <ContainedButtons />
      </CardActions>
    </Card>
  );
};
