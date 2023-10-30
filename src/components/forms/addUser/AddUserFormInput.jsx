import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import useUserList from '../../../hooks/queries/admin/useUserList';
import useNotification from '../../../hooks/ui/useNotification';
import adminServices from '../../../services/adminServices';
function AddUserFormInput() {
  const {displayNotification} = useNotification();
  const userListQuery = useUserList();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      maLoaiNguoiDung: '',
      taiKhoan: '',
      hoTen: '',
      matKhau: '',
      soDT: '',
      email: '',
      maNhom: 'GP01',
    },
  });

  const addUserInformation = useMutation(
    (addData) => {
      adminServices.addUser(addData);
    },
    {
      onSuccess: () => {
        userListQuery.refetch();
        navigate('/admin');
        displayNotification({
          message: `Thêm tài khoản thành công`,
          type: 'success',
        });
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (errorMessage) {
          displayNotification({
            message: `Thêm tài khoản thất bại! ${errorMessage}`,
            type: 'error',
          });
        } else {
          displayNotification({
            message: 'Thêm tài khoản thất bại!',
            type: 'error',
          });
        }
      },
    }
  );

  const editFormContent = [
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
    {
      id: 'maLoaiNguoiDung',
      label: 'Loại người dùng',
      type: 'text',
      authenticate: register('maLoaiNguoiDung', {
        required: 'Loại người dùng không được để trống!',
      }),
      errorMessage: errors.maLoaiNguoiDung?.message,
    },
  ];
  return (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit((data, event) => {
          event.preventDefault();
          addUserInformation.mutate(data);
        })}
        noValidate
      >
        <Stack spacing={1}>
          {editFormContent.map((addInput) => (
            <Stack key={addInput.id}>
              {addInput.id === 'maLoaiNguoiDung' ? (
                <TextField
                  select
                  type={addInput.type}
                  margin='normal'
                  required
                  fullWidth
                  label={addInput.label}
                  {...addInput.authenticate}
                >
                  <MenuItem value={'GV'}>Giảng viên</MenuItem>
                  <MenuItem value={'HV'}>Học viên</MenuItem>
                </TextField>
              ) : (
                <TextField
                  type={addInput.type}
                  margin='normal'
                  required
                  fullWidth
                  label={addInput.label}
                  {...addInput.authenticate}
                />
              )}

              <Typography variant='body1' color='red'>
                {addInput.errorMessage}
              </Typography>
            </Stack>
          ))}
          <Button
            disableElevation
            size='large'
            type='submit'
            fullWidth
            variant='contained'
          >
            Thêm người dùng
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default AddUserFormInput;
