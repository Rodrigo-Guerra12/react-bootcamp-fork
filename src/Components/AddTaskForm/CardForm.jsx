// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicTextFields from "./InputForm";
import ButtonAgregar from "./ButtonAgregar";

export default function BasicCard() {
  const url = "http://localhost:3000/tasks";
  const headers = new Headers({ "Content-Type": "application/json" });
  const onAddHandler = async (newTask) => {
    try {
      console.log("Task", newTask);
      const response = await fetch(url, {
        body: JSON.stringify(newTask),

        headers,
        method: "POST",
      });

      const jsonData = await response.json();
      console.log("Jsondata", jsonData);
      // setTasks(jsonData);

      // setFilteredTaskList(jsonData);
    } catch (error) {
      console.log("Error al traer datos:", error);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Nueva Tarea
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          Descripcion
        </Typography>

        <BasicTextFields />
      </CardContent>

      <CardActions>
        <ButtonAgregar onAddHandler={onAddHandler} />
      </CardActions>
    </Card>
  );
}
