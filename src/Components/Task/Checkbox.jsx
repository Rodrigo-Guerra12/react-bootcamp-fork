import React from 'react';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}