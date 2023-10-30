import {Button, useTheme} from '@mui/material';
import {Stack} from '@mui/system';
import {useMutation} from '@tanstack/react-query';
import _ from 'lodash';
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';
import useUserDetail from '../../../hooks/queries/user/useUserDetail';
import useNotification from '../../../hooks/ui/useNotification';
import coursesServices from '../../../services/coursesServices';
import {localServices} from '../../../services/localServices';
import Loading from '../../ui/Loading';

const CourseRegisterButtonGroup = () => {
  const theme = useTheme();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const courseDetailQuery = useCourseDetail(params.courseId);
  const courseId = params.courseId;
  const userAccount = localServices.user.get().taiKhoan;
  const {displayNotification} = useNotification();
  const userDetailQuery = useUserDetail();
  const isCourseRegisterd = _.some(
    userDetailQuery.data?.chiTietKhoaHocGhiDanh,
    {maKhoaHoc: params.courseId}
  );
  const registerCourse = useMutation(
    (registerData) => {
      return coursesServices.registerCourse(registerData);
    },
    {
      onSuccess: () => {
        navigate('/user', {replace: true});
        displayNotification({
          message: `Đăng ký khóa học ${courseDetailQuery.data?.tenKhoaHoc} thành công, vui lòng kiểm tra tại trang cá nhân`,
          type: 'success',
        });
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (errorMessage) {
          displayNotification({
            message: `Đăng ký thất bại! ${errorMessage}`,
            type: 'error',
          });
        } else {
          displayNotification({
            message: 'Đăng ký thất bại!',
            type: 'error',
          });
        }
      },
    }
  );

  const handleRegister = () => {
    const registerData = {
      maKhoaHoc: courseId,
      taiKhoan: userAccount,
    };
    registerCourse.mutate(registerData);
  };

  if (userDetailQuery.isLoading) {
    return <Loading />;
  }

  return (
    <Stack
      spacing={1.5}
      sx={{
        width: {
          xs: '100%',
          md: '60%',
        },
      }}
    >
      <Button
        size='large'
        onClick={handleRegister}
        variant='contained'
        color='primary'
        disabled={isCourseRegisterd}
      >
        {isCourseRegisterd ? 'Khóa học đã được đăng ký' : 'Xác Nhận Đăng Ký'}
      </Button>
      <Button
        size='large'
        component={Link}
        to={location.state ? location.state : '/'}
        variant='outlined'
        color='primary'
        sx={{color: theme.palette.text.primary}}
      >
        Hủy Bỏ
      </Button>
    </Stack>
  );
};

export default CourseRegisterButtonGroup;
