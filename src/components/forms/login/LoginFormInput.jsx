import {Box, Stack, TextField, Typography} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import useNotification from '../../../hooks/ui/useNotification';
import useProgressBar from '../../../hooks/ui/useProgressBar';
import {userServices} from '../../../services/userServices';
import {authActions} from '../../../store/authSlice';
import LoginFormButtonGroup from './LoginFormButtonGroup';

const LoginFormInput = () => {
  const {displayNotification} = useNotification();
  const {onProgress} = useProgressBar();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
  });

  const login = useMutation(
    (loginData) => {
      return userServices.login(loginData, onProgress);
    },
    {
      onSuccess: (response) => {
        dispatch(authActions.login(response.data));
        displayNotification({
          message: 'Đăng nhập thành công!',
          type: 'success',
        });
        navigate(!location.state ? '/' : location.state);
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (!errorMessage) {
          return;
        }
        displayNotification({
          message: `Đăng nhập thất bại! ${errorMessage}`,
          type: 'error',
        });
      },
    }
  );

  const loginFormContent = [
    {
      id: 'username',
      label: 'Tên tài khoản',
      type: 'text',
      authenticate: register('taiKhoan', {
        required: 'Tên tài khoản không được để trống!',
      }),
      errorMessage: errors.taiKhoan?.message,
    },
    {
      id: 'password',
      label: 'Mật khẩu',
      type: 'password',
      authenticate: register('matKhau', {
        required: 'Mật khẩu không được để trống',
      }),
      errorMessage: errors.matKhau?.message,
    },
  ];

  return (
    <Box
      component='form'
      onSubmit={handleSubmit((data, event) => {
        event.preventDefault();
        login.mutate(data);
      })}
      noValidate
    >
      <Stack direction='column'>
        {loginFormContent.map((loginInputItem) => (
          <Stack key={loginInputItem.id} direction='column'>
            <TextField
              margin='normal'
              required
              fullWidth
              type={loginInputItem.type}
              label={loginInputItem.label}
              {...loginInputItem.authenticate}
            />
            <Typography variant='body1' color='red'>
              {loginInputItem.errorMessage}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <LoginFormButtonGroup isLoading={login.isLoading} />
    </Box>
  );
};

export default LoginFormInput;
