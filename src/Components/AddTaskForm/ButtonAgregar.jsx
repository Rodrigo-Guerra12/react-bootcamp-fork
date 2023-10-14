import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
export default function ButtonAgregar({ onAddHandler }) {
  const onClickHandler = () => {
    const newTask = {
      description: "bla bla",
      isCompleted: true,
    };
    onAddHandler(newTask);
  };
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClickHandler} variant="contained">
        Agregar
      </Button>
    </Stack>
  );
}
