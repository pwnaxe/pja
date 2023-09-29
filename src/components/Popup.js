import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Popup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (city) => {
    console.log(`Wybrano miasto: ${city}`);
    setOpen(false);

    if (city === 'Warszawa') {
      navigate('/wwa');
    }

    if (city === 'Gdańsk') {
      navigate('/gda');
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center', marginBottom: '20px' }}>
          Wybierz filie
        </Typography>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ cursor: 'pointer' }} onClick={() => handleClose('Warszawa')}>
              <Button variant="contained" color="primary" fullWidth>
                Warszawa
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ cursor: 'pointer' }} onClick={() => handleClose('Gdańsk')}>
              <Button variant="contained" color="primary" fullWidth>
                Gdańsk
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;