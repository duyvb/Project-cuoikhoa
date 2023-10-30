import {
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {useDispatch} from 'react-redux';
import useUserDetail from '../../hooks/queries/user/useUserDetail';
import {modalAction} from '../../store/modalSlice';
import UserAvatar from './UserAvatar';

function UserInfor() {
  const theme = useTheme();
  const userDetailQuery = useUserDetail();
  const dispatch = useDispatch();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  const userDetailInformationContent = [
    {
      id: 'hoTen',
      label: 'Họ tên',
      data: userDetailQuery.data?.hoTen,
    },
    {
      id: 'taiKhoan',
      label: 'Tài khoản',
      data: userDetailQuery.data?.taiKhoan,
    },
    {
      id: 'matKhau',
      label: 'Mật Khẩu',
      data: userDetailQuery.data?.matKhau,
    },
    {
      id: 'email',
      label: 'Email',
      data: userDetailQuery.data?.email,
    },
    {
      id: 'soDT',
      label: 'Số điện thoại',
      data: userDetailQuery.data?.soDT,
    },
  ];

  const handleUpdateModalOpen = () => {
    dispatch(modalAction.setUserUpdateInfoModal(true));
  };

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      spacing={!isLargerThanMd ? 2 : 5}
    >
      <Grid item xs={12} md={6}>
        <Stack alignItems={!isLargerThanMd ? 'center' : 'end'}>
          <UserAvatar />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          {userDetailInformationContent.map((courseDetailItem) => (
            <Stack
              key={courseDetailItem.id}
              direction={!isLargerThanMd ? 'column' : 'row'}
              alignItems='center'
              spacing={0.5}
            >
              <Typography
                fontWeight={theme.typography.fontWeightBold}
                sx={{color: theme.palette.primary.main}}
                variant='body1'
                textAlign='left'
              >
                {courseDetailItem.label}
                {isLargerThanMd && ':'}
              </Typography>
              <Typography
                sx={{wordBreak: 'break-word'}}
                color='GrayText'
                variant='body1'
              >
                {courseDetailItem.data}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack alignItems='center'>
          <Button
            onClick={handleUpdateModalOpen}
            variant='contained'
            color='warning'
            size='large'
            disabled={!userDetailQuery.data}
          >
            Thay Đổi Thông Tin
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserInfor;
