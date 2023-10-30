import {
  Button,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

const SignupButtonGroup = (props) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Stack marginTop={2} spacing={1}>
      
      <Typography
        sx={{
          textDecoration: 'none',
          cursor: 'pointer',
          fontWeight: theme.typography.fontWeightBold,
          transition: 'color 300ms ease',
          color: theme.palette.text.primary,
          '&:hover, &:focus': {
            color: theme.palette.warning.main,
          },
        }}
        variant='body1'
        component={Link}
        to='/login'
        state={location.pathname}
      >
        Bạn đã có tài khoản?<Button>Đăng nhập.</Button> 
      </Typography>
      <Button
        disableElevation
        size='large'
        type='submit'
        fullWidth
        variant='contained'
      >
        {props.isLoading ? (
          <CircularProgress
            style={{width: '30px', height: '30px', color: '#ffffff'}}
          />
        ) : (
          'Đăng Ký'
        )}
      </Button>
      <Button
        component={Link}
        to={location.state ? location.state : '/'}
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

export default SignupButtonGroup;
