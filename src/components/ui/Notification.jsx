import {Alert, Slide, Snackbar} from '@mui/material';
import React from 'react';
import {useSelector} from 'react-redux';
import useNotification from '../../hooks/ui/useNotification';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const {clearNotification} = useNotification();

  const handleClose = (event, reason) => {
    reason !== 'clickaway' && clearNotification();
  };

  return (
    <Snackbar
      open={notification.open}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <Alert
        variant='filled'
        onClose={handleClose}
        severity={notification.type}
      >
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
