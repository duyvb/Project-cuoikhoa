import React from 'react';
import {Container, Stack, Typography} from '@mui/material';
import AddUserFormInput from './AddUserFormInput';

function AddUser() {
  return (
    <>
      <Stack
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{
          minHeight: '700px',
        }}
      >
        <Container maxWidth='sm'>
          <Typography variant='h4' color='#3D5CFF' fontWeight='700'>
            {' '}
            Thêm Người Dùng{' '}
          </Typography>
          <AddUserFormInput />
        </Container>
      </Stack>
    </>
  );
}

export default AddUser;
