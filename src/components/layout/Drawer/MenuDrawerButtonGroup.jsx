import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import {Button, Stack} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {authActions} from '../../../store/authSlice';

const MenuDrawerButtonGroup = (props) => {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    props.onClose();
    dispatch(authActions.logout());
    navigate('/', {replace: true});
  };

  if (isLoggedIn) {
    return (
      <Stack spacing={1}>
        <Button
          component={Link}
          to='/user'
          onClick={props.onClose}
          disableElevation
          variant='contained'
          color='primary'
          startIcon={<PersonIcon />}
        >
          {user.hoTen}
        </Button>
        {user.maLoaiNguoiDung === 'GV' && (
          <Button
            component={Link}
            to='/admin'
            disableElevation
            variant='contained'
            color='primary'
          >
            Quản trị
          </Button>
        )}
        <Button
          variant='outlined'
          color='primary'
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Đăng Xuất
        </Button>
      </Stack>
    );
  }

  return (
    <Stack spacing={1}>
      <Button
        component={Link}
        to='/login'
        state={location.pathname + encodeURI(location.search)}
        onClick={props.onClose}
        disableElevation
        variant='contained'
        color='primary'
      >
        Đăng Nhập
      </Button>
      <Button
        component={Link}
        to='/signup'
        state={location.pathname + encodeURI(location.search)}
        onClick={props.onClose}
        variant='outlined'
        color='primary'
      >
        Đăng Ký
      </Button>
    </Stack>
  );
};

export default MenuDrawerButtonGroup;
