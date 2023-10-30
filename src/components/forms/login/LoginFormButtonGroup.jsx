import {
  Button,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

const LoginFormButtonGroup = (props) => {
  const theme = useTheme();
  const location = useLocation();

  return (

    <Stack marginTop={2} spacing={1}>
      <Typography
        sx={{
          cursor: 'pointer',
          transition: 'color 300ms ease',
          fontWeight: theme.typography.fontWeightBold,
          textDecoration: 'none',
          color: theme.palette.text.primary,
          '&:hover, &:focus': {
            color: theme.palette.warning.main,
          },
        }}
        variant='body1'
        component={Link}
        to='/signup'
        state={location.pathname}
      >
        Bạn chưa có tài khoản? <Button>Đăng Ký</Button>
      </Typography>
      <Button
        size='large'
        disableElevation
        type='submit'
        fullWidth
        variant='contained'
        sx={{gap: 2}}
      >
        {props.isLoading ? (
          <CircularProgress
            style={{width: '30px', height: '30px', color: '#ffffff'}}
          />
        ) : (
          'Đăng Nhập'
        )}
      </Button>
      <Button
        component={Link}
        to={
          !location.state
            ? '/'
            : location.state.includes('registerCourse')
            ? '/'
            : location.state
        }
        size='large'
        type='button'
        fullWidth
        variant='outlined'
      >
        Hủy Bỏ
      </Button>
    </Stack>
  );
};

export default LoginFormButtonGroup;
