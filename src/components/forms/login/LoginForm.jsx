import {Box, Container, Stack} from '@mui/material';
import LoginFormInput from './LoginFormInput';
import LoginFormTitle from './LoginFormTitle';

const LoginForm = () => {
  return (
    <>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Container maxWidth='sm'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <LoginFormTitle />
            <LoginFormInput />
          </Box>
        </Container>
      </Stack>
    </>
  );
};

export default LoginForm;
