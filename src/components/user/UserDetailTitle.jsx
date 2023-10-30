import {Typography, useTheme} from '@mui/material';

function UserDetailTitle() {
  const theme = useTheme();

  return (
    <Typography
      sx={{color: theme.palette.warning.main}}
      align='center'
      fontWeight={theme.typography.fontWeightBold}
      variant='h4'
      component='h1'
    >
      Quản Lý Tài Khoản
    </Typography>
  );
}

export default UserDetailTitle;
