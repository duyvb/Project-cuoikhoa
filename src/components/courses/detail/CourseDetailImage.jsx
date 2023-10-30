import {Box, useMediaQuery, useTheme} from '@mui/material';
import {useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';

const CourseDetailImage = () => {
  const theme = useTheme();
  const params = useParams();
  const courseDetailQuery = useCourseDetail(params.courseId);
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component='img'
      sx={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxHeight: isLargerThanMd ? '250px' : 'max-content',
        objectFit: 'cover',
        borderRadius: '15px',
        boxShadow: theme.shadows[4],
      }}
      src={courseDetailQuery.data?.hinhAnh}
      alt='Hình Khóa Học'
    ></Box>
  );
};

export default CourseDetailImage;
