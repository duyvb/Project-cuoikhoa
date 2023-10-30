import {
  Button,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {Stack} from '@mui/system';
import {useMutation} from '@tanstack/react-query';
import useUserDetail from '../../hooks/queries/user/useUserDetail';
import useNotification from '../../hooks/ui/useNotification';
import coursesServices from '../../services/coursesServices';
import {localServices} from '../../services/localServices';
import Loading from '../ui/Loading';
import UserCourseImg from './UserCourseImg';

const UserCourse = () => {
  const theme = useTheme();
  const {displayNotification} = useNotification();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  const userDetailQuery = useUserDetail();
  const registeredCourse = userDetailQuery.data?.chiTietKhoaHocGhiDanh;
  const userAccount = localServices.user.get().taiKhoan;
  const cancelCourse = useMutation(
    (cancelData) => {
      return coursesServices.cancelCourse(cancelData);
    },
    {
      onSuccess: () => {
        userDetailQuery.refetch();
        displayNotification({
          message: `Hủy khóa học thành công!`,
          type: 'success',
        });
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (errorMessage) {
          displayNotification({
            message: `Hủy khóa học thất bại! ${errorMessage}`,
            type: 'error',
          });
        } else {
          displayNotification({
            message: 'Hủy khóa học thất bại!',
            type: 'error',
          });
        }
      },
    }
  );

  const handleCancelCourse = (courseId) => {
    const cancelData = {
      maKhoaHoc: courseId,
      taiKhoan: userAccount,
    };
    cancelCourse.mutate(cancelData);
  };

  if (userDetailQuery.isLoading) {
    return <Loading />;
  }

  const onRenderRegisteredCourse = () => {
    return registeredCourse.map((courseItem) => {
      return (
        <Paper
          key={courseItem.maKhoaHoc}
          sx={{
            width: '100%',
            boxShadow: theme.shadows[0],
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Stack
            margin='0 20px'
            direction='row'
            alignItems='center'
            spacing={2}
          >
            <UserCourseImg
              width='30%'
              height='100px'
              src={courseItem.hinhAnh}
            />
            <Typography
              variant='h6'
              fontWeight={theme.typography.fontWeightBold}
              component='p'
              sx={{flexGrow: 1}}
            >
              {courseItem.tenKhoaHoc}
            </Typography>
            {isLargerThanMd && (
              <Button
                onClick={() => {
                  handleCancelCourse(courseItem.maKhoaHoc);
                }}
                variant='outlined'
                color='error'
              >
                Hủy đăng ký
              </Button>
            )}
          </Stack>
          {!isLargerThanMd && (
            <Button
              onClick={() => {
                handleCancelCourse(courseItem.maKhoaHoc);
              }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: 'fit-content',
                margin: '0 auto 15px',
              }}
              variant='outlined'
              color='error'
            >
              Hủy đăng ký
            </Button>
          )}
        </Paper>
      );
    });
  };

  return (
    <>
      {registeredCourse.length === 0 && (
        <Typography
          align='center'
          variant='body1'
          fontWeight={theme.typography.fontWeightBold}
          component='p'
        >
          BẠN CHƯA THAM GIA
          {!isLargerThanMd && <br />} KHÓA HỌC NÀO!
        </Typography>
      )}
      {onRenderRegisteredCourse()}
    </>
  );
};

export default UserCourse;
