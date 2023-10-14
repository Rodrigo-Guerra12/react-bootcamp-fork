import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { PropTypes } from "prop-types";

export const ControlledCheckbox = ({ isCompleted }) => {
  const [checked, setChecked] = useState(isCompleted);
  console.log(checked, isCompleted);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};

ControlledCheckbox.propTypes = { isCompleted: PropTypes.boolean };
