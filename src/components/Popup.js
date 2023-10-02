import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
    <Dialog open={open} fullWidth={true} maxWidth='sm'>
      <DialogContent style={{ padding: 0 }}>
        <Grid container spacing={0} style={{ height: '100%' }}>
          <Grid item xs={6}>
            <div style={{
              cursor: 'pointer',
              backgroundColor: '#ffcc00',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s'
            }}
              onClick={() => handleClose('Warszawa')}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ffe200'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffcc00'}
            >
              <Typography variant="h6">Warszawa</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{
              cursor: 'pointer',
              backgroundColor: '#2e40a3',
              color: 'white',
              height: '20vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s'
            }}
              onClick={() => handleClose('Gdańsk')}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3f51b5'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2e40a3'}
            >
              <Typography variant="h6">Gdańsk</Typography>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;
