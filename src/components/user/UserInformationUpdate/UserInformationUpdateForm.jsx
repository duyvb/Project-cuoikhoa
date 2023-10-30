import {Stack, TextField, Typography} from '@mui/material';
import {useMutation} from '@tanstack/react-query';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import useUserDetail from '../../../hooks/queries/user/useUserDetail';
import useNotification from '../../../hooks/ui/useNotification';
import {userServices} from '../../../services/userServices';
import {modalAction} from '../../../store/modalSlice';
import UserInformationUpdateButtonGroup from './UserInformationUpdateButtonGroup';

const UserInformationUpdateForm = () => {
  const userDetailQuery = useUserDetail();
  const dispatch = useDispatch();
  const {displayNotification} = useNotification();
  const {
    register,
    handleSubmit,
    formState: {errors, defaultValues},
  } = useForm({
    defaultValues: {
      taiKhoan: userDetailQuery.data?.taiKhoan,
      matKhau: userDetailQuery.data?.matKhau,
      hoTen: userDetailQuery.data?.hoTen,
      soDT: userDetailQuery.data?.soDT,
      maLoaiNguoiDung: userDetailQuery.data?.maLoaiNguoiDung,
      maNhom: userDetailQuery.data?.maNhom,
      email: userDetailQuery.data?.email,
    },
  });

  const updateUserInformation = useMutation(
    (updateData) => {
      userServices.updateUserInformation(updateData);
    },
    {
      onSuccess: () => {
        displayNotification({
          type: 'success',
          message: 'Cập nhật thông tin thành công!',
        });
        userDetailQuery.refetch();
        dispatch(modalAction.setUserUpdateInfoModal(false));
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (!errorMessage) {
          return;
        }
        displayNotification({
          type: 'error',
          message: `Cập nhật thông tin thất bại! ${errorMessage}`,
        });
      },
    }
  );

  const updateFormContent = [
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
    <Stack
      onSubmit={handleSubmit((updateData, event) => {
        event.preventDefault();
        updateUserInformation.mutate(updateData);
      })}
      component='form'
      marginTop={5}
      spacing={3}
    >
      {updateFormContent.map((updateFormItem) => (
        <Stack key={updateFormItem.id} spacing={1}>
          <TextField
            disabled={updateFormItem.id === 'username' && true}
            required
            variant='outlined'
            label={updateFormItem.label}
            defaultValue={updateFormItem.defaultValue}
            {...updateFormItem.authenticate}
          />
          <Typography variant='body1' color='red'>
            {updateFormItem.errorMessage}
          </Typography>
        </Stack>
      ))}
      <UserInformationUpdateButtonGroup />
    </Stack>
  );
};

export default UserInformationUpdateForm;
