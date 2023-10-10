import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={6}>
      <Button variant="contained">Editar</Button>
      <Button variant="contained">Borrar</Button>
    </Stack>
  );
}