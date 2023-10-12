// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicTextFields from './InputForm';
import ButtonAgregar from './ButtonAgregar';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h5" component="div">
          Nueva Tarea
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Descripcion
        </Typography>

        <BasicTextFields/>
        <ButtonAgregar/>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}