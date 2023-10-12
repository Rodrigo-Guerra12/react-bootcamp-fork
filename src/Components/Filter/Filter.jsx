import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select"; //  { SelectChangeEvent }

export const Filter = () => {
  const handleChange = () => {
    console.log(handleChange);
  };

  return (
    <FormControl sx={{ width: 400 }}>
      <InputLabel id="demo-simple-select-label">Task State</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={null}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={true}>complete</MenuItem>

        <MenuItem value={false}>no complited</MenuItem>

        <MenuItem value={null}>all</MenuItem>
      </Select>
    </FormControl>
  );
};
