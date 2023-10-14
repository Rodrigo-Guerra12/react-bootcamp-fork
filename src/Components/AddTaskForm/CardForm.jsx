// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicTextFields from './InputForm';
import ButtonAgregar from './ButtonAgregar';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Nueva Tarea
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          Descripcion
        </Typography>

        <BasicTextFields/>
      </CardContent>
      
      <CardActions>
        <ButtonAgregar/>
      </CardActions>
    </Card>
  );
}