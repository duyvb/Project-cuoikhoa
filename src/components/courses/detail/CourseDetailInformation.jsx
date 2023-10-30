import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Stack, Typography, useTheme} from '@mui/material';
import {Box} from '@mui/system';
import {useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';

const CourseDetailInformation = () => {
  const theme = useTheme();
  const params = useParams();
  const courseDetailQuery = useCourseDetail(params.courseId);

  const courseDetailInformationContent = [
    {
      id: 'nguoiTao',
      icon: AccountCircleIcon,
      label: 'Người tạo',
      data: courseDetailQuery.data?.nguoiTao.hoTen,
    },
    {
      id: 'luotXem',
      icon: VisibilityIcon,
      label: 'Lượt xem',
      data: courseDetailQuery.data?.luotXem,
    },
    {
      id: 'ngayXuatBan',
      icon: DateRangeIcon,
      label: 'Ngày xuất bản',
      data: courseDetailQuery.data?.ngayTao,
    },
    {
      id: 'soHocVien',
      icon: EqualizerIcon,
      label: 'Số học viên',
      data: courseDetailQuery.data?.soLuongHocVien,
    },
  ];

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      {courseDetailInformationContent.map((courseDetailItem) => (
        <Stack key={courseDetailItem.id} direction='row'>
          <courseDetailItem.icon sx={{marginRight: 1, color: '#3d5cff'}} />
          <Stack direction='row' spacing={0.5}>
            <Typography
              fontWeight={theme.typography.fontWeightBold}
              variant='body1'
            >
              {courseDetailItem.label}:
            </Typography>
            <Typography variant='body1'>{courseDetailItem.data}</Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default CourseDetailInformation;
