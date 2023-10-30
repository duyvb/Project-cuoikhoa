import {Typography, useTheme} from '@mui/material';
import {Stack} from '@mui/system';

const CourseRegisterTitle = () => {
  const theme = useTheme();

  return (
    <Stack spacing={1}>
      <Typography
        fontWeight={theme.typography.fontWeightBold}
        variant='h4'
        align='center'
        component='h1'
        color='primary'
      >
        KIỂM TRA
        <br />
        THÔNG TIN ĐĂNG KÝ
      </Typography>
      <Typography variant='body1' component='p' align='center'>
        Vui lòng kiểm tra thông tin trước khi xác nhận đăng ký
      </Typography>
    </Stack>
  );
};

export default CourseRegisterTitle;
