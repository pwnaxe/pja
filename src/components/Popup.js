import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

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
    <Dialog
      open={open}
    >
      <DialogActions>
        <Button onClick={() => handleClose('Warszawa')} color="primary">
          Warszawa
        </Button>
        <Button onClick={() => handleClose('Gdańsk')} color="primary">
          Gdańsk
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;