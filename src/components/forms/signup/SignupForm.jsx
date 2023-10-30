import {Container, Stack} from '@mui/material';
import SignupFormInput from './SignupFormInput';
import SignupFormTitle from './SignupFormTitle';

const SignupForm = () => {
  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        width: '100vw',
        height: '100vh',
        minHeight: '700px',
      }}
    >
      <Container maxWidth='sm'>
        <Stack alignItems='stretch'>
          <SignupFormTitle />
          <SignupFormInput />
        </Stack>
      </Container>
    </Stack>
  );
};

export default SignupForm;
