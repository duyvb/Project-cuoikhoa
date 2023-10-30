import {Stack, Typography, useTheme} from '@mui/material';

const SignupFormTitle = () => {
  const theme = useTheme();

  return (
    <Stack direction='column' alignItems='center' spacing={1}>

      <Typography
        sx={{fontWeight: theme.typography.fontWeightBold}}
        component='h1'
        variant='h5'
      >
        ĐĂNG KÝ
      </Typography>
    </Stack>
  );
};

export default SignupFormTitle;
