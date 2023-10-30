import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import {Box, Button, Popover, Stack} from '@mui/material';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {authActions} from '../../../store/authSlice';
import HeaderSearchInput from './HeaderSearchInput';

const HeaderButtonGroup = () => {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/', {replace: true});
    setTimeout(() => {
      dispatch(authActions.logout());
    }, 0);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenUserNav = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserNav = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  if (isLoggedIn) {
    return (
      <Stack direction='row' alignItems='center' spacing={1}>
        <HeaderSearchInput />
        <Box>
          <Button
            onClick={handleOpenUserNav}
            aria-describedby={id}
            variant='contained'
            color='primary'
            disableElevation
            startIcon={<PersonIcon />}
          >
            {user.hoTen}
          </Button>
          <Popover
            sx={{marginTop: '10px'}}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseUserNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Stack padding='10px' gap='5px'>
              <Button
                component={Link}
                to='/user'
                disableElevation
                variant='contained'
                color='primary'
              >
                Thông tin
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
          </Popover>
        </Box>
      </Stack>
    );
  }

  return (
    <Stack direction='row' alignItems='center' spacing={1}>
      <HeaderSearchInput />
      <Button
        component={Link}
        to='/login'
        state={location.pathname + encodeURI(location.search)}
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
        variant='outlined'
        color='primary'
      >
        Đăng Ký
      </Button>
    </Stack>
  );
};

export default HeaderButtonGroup;
