import {Chip, Typography, useMediaQuery, useTheme} from '@mui/material';
import {Stack} from '@mui/system';
import {useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';

const CourseDetailTitle = () => {
  const theme = useTheme();
  const params = useParams();
  const courseDetailQuery = useCourseDetail(params.courseId);
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack
      spacing={1}
      justifyContent='center'
      alignItems={isLargerThanMd ? 'start' : 'center'}
    >
      <Typography
        sx={{
          fontWeight: theme.typography.fontWeightBold,
        }}
        mt={2}
        variant='h2'
        component='h1'
      >
        {courseDetailQuery.data?.tenKhoaHoc}
      </Typography>
      <Chip
        variant='filled'
        color='warning'
        label={courseDetailQuery?.data.danhMucKhoaHoc.tenDanhMucKhoaHoc}
        sx={{
          color: '#ffffff',
          fontWeight: theme.typography.fontWeightBold,
          whiteSpace: 'nowrap',
          alignSelf: isLargerThanMd ? 'start' : 'center',
        }}
      ></Chip>
    </Stack>
  );
};

export default CourseDetailTitle;
