import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select"; //  { SelectChangeEvent }

export const Filter = () => {
  const handleChange = () => {
    console.log(handleChange);
  };

  return (

    <FormControl sx={{minWidth: 300}}>
      <InputLabel id="demo-simple-select-label">Estado de la Tarea</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={null}
        label="Age"
        onChange={handleChange}
      >
<<<<<<< Updated upstream
        <MenuItem value={true}>complete</MenuItem>

        <MenuItem value={false}>no complited</MenuItem>

        <MenuItem value={null}>all</MenuItem>
=======
        <MenuItem value={1}>Completada</MenuItem>

        <MenuItem value={0}>No Completada</MenuItem>

        <MenuItem value={2}>Todas</MenuItem>
>>>>>>> Stashed changes
      </Select>
    </FormControl>
  );
};
