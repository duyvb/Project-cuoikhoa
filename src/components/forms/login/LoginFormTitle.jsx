import {Stack, Typography, useTheme} from '@mui/material';

const LoginFormTitle = () => {
  const theme = useTheme();

  return (
    <Stack direction='column' alignItems='center' spacing={1}>

      <Typography
        component='h1'
        sx={{fontWeight: theme.typography.fontWeightBold}}
        variant='h5'
      >
        ĐĂNG NHẬP
      </Typography>
    </Stack>
  );
};

export default LoginFormTitle;
