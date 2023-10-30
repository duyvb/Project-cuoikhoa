import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useForm} from 'react-hook-form';
import useUserList from '../../../hooks/queries/admin/useUserList';
import useNotification from '../../../hooks/ui/useNotification';
import adminServices from '../../../services/adminServices';

function UserEditFormInput({data}) {
  const {displayNotification} = useNotification();
  const userListQuery = useUserList();
  const {
    register,
    handleSubmit,
    formState: {errors, defaultValues},
  } = useForm({
    defaultValues: {
      taiKhoan: `${data.taiKhoan}`,
      hoTen: `${data.hoTen}`,
      matKhau: ``,
      soDT: `${data.soDt}`,
      email: `${data.email}`,
      maLoaiNguoiDung: `${data.maLoaiNguoiDung}`,
      maNhom: 'GP01',
    },
  });
  const editUserInformation = useMutation(
    (editData) => {
      adminServices.editUserInformation(editData);
    },
    {
      onSuccess: () => {
        userListQuery.refetch();
        displayNotification({
          message: `Đã chỉnh sửa ${data?.taiKhoan} thành công`,
          type: 'success',
        });
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (errorMessage) {
          displayNotification({
            message: `Sửa ${data?.taiKhoan} thất bại! ${errorMessage}`,
            type: 'error',
          });
        } else {
          displayNotification({
            message: 'Sửa thông tin thất bại!',
            type: 'error',
          });
        }
      },
    }
  );

  const editFormContent = [
    {
      id: 'username',
      label: 'Tài Khoản',
      type: 'text',
      authenticate: register('taiKhoan', {
        required: 'Tên tài khoản không được để trống!',
        minLength: {
          value: 6,
          message: 'Ít nhất 6 ký tự',
        },
      }),
      errorMessage: errors.taiKhoan?.message,
      defaultValue: defaultValues.taiKhoan,
    },
    {
      id: 'password',
      label: 'Mật Khẩu',
      type: 'text',
      authenticate: register('matKhau', {
        required: 'Mật khẩu không được để trống',
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          message:
            'Mật khẩu phải có ít nhất 1 chữ số, 1 chữ thường, 1 chữ in hoa và 8 ký tự',
        },
      }),
      errorMessage: errors.matKhau?.message,
      defaultValue: defaultValues.matKhau,
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
      defaultValue: defaultValues.hoTen,
    },
    {
      id: 'phone',
      label: 'Số Điện Thoại',
      type: 'text',
      authenticate: register('soDT', {
        required: 'Số điện thoại không được để trống!',
        pattern: {
          value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          message: 'Vui lòng nhập số điện thoại hợp lệ',
        },
      }),
      errorMessage: errors.soDT?.message,
      defaultValue: defaultValues.soDT,
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
      defaultValue: defaultValues.email,
    },
  ];
  return (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit((data, event) => {
          event.preventDefault();
          editUserInformation.mutate(data);
        })}
        noValidate
      >
        <Stack spacing={1}>
          {editFormContent.map((editInput) => (
            <Stack key={editInput.id} spacing={1}>
              <TextField
                disabled={editInput.id === 'username' && true}
                type={editInput.type}
                margin='normal'
                required
                fullWidth
                label={editInput.label}
                {...editInput.authenticate}
              />
              <Typography variant='body1' color='red'>
                {editInput.errorMessage}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Button
          disableElevation
          size='large'
          type='submit'
          fullWidth
          variant='contained'
        >
          Cập nhật
        </Button>
      </Box>
    </>
  );
}

export default UserEditFormInput;
