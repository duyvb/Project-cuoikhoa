import {Box, Stack, TextField, Typography} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import useNotification from '../../../hooks/ui/useNotification';
import useProgressBar from '../../../hooks/ui/useProgressBar';
import {userServices} from '../../../services/userServices';
import SignupButtonGroup from './SignupButtonGroup';

const SignupFormInput = () => {
  const {displayNotification} = useNotification();
  const {onProgress} = useProgressBar();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      hoTen: '',
      taiKhoan: '',
      matKhau: '',
      soDT: '',
      email: '',
      maNhom: 'GP01',
    },
  });

  const signup = useMutation(
    (signupData) => {
      return userServices.signup(signupData, onProgress);
    },
    {
      onSuccess: () => {
        displayNotification({
          type: 'success',
          message: 'Đăng ký tài khoản thành công!',
        });
        navigate('/login');
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (!errorMessage) {
          return;
        }
        displayNotification({
          type: 'error',
          message: `Đăng nhập thất bại! ${errorMessage}`,
        });
      },
    }
  );

  const signupFormContent = [
    {
      id: 'name',
      label: 'Họ Tên',
      type: 'text',
      authenticate: register('hoTen', {
        required: 'Họ tên không được để trống!',
        minLength: {
          value: 4,
          message: 'Họ tên phải bao gồm ít nhất 4 ký tự',
        },
      }),
      errorMessage: errors.hoTen?.message,
    },
    {
      id: 'username',
      label: 'Tên tài khoản',
      type: 'text',
      authenticate: register('taiKhoan', {
        required: 'Tên tài khoản không được để trống!',
        minLength: {
          value: 6,
          message: 'Ít nhất 6 ký tự',
        },
      }),
      errorMessage: errors.taiKhoan?.message,
    },
    {
      id: 'password',
      label: 'Mật khẩu',
      type: 'password',
      authenticate: register('matKhau', {
        required: 'Mật khẩu không được để trống',
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          message:
            'Mật khẩu phải có ít nhất 1 chữ số, 1 chữ thường, 1 chữ in hoa và 8 ký tự',
        },
      }),
      errorMessage: errors.matKhau?.message,
    },
    {
      id: 'phoneNumber',
      label: 'Số điện thoại',
      authenticate: register('soDT', {
        required: 'Số điện thoại không được để trống!',
        pattern: {
          value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          message: 'Vui lòng nhập số điện thoại hợp lệ',
        },
      }),
      errorMessage: errors.soDT?.message,
    },
    {
      id: 'email',
      label: 'Email',
      type: 'text',
      authenticate: register('email', {
        required: 'Email không được để trống!',
        pattern: {
          value:
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
          message: 'Vui lòng nhập email hợp lệ!',
        },
      }),
      errorMessage: errors.email?.message,
    },
  ];

  return (
    <Box
      component='form'
      noValidate
      onSubmit={handleSubmit((data, event) => {
        event.preventDefault();
        signup.mutate(data);
      })}
    >
      <Stack spacing={1}>
        {signupFormContent.map((signupInput) => (
          <Stack key={signupInput.id}>
            <TextField
              type={signupInput.type}
              margin='normal'
              required
              fullWidth
              label={signupInput.label}
              {...signupInput.authenticate}
            />
            <Typography variant='body1' color='red'>
              {signupInput.errorMessage}
            </Typography>
          </Stack>
        ))}
        <SignupButtonGroup onLoading={signup.isLoading} />
      </Stack>
    </Box>
  );
};

export default SignupFormInput;
