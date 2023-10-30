import {Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';

const CourseDetailDescription = () => {
  const params = useParams();
  const courseDetailQuery = useCourseDetail(params.courseId);

  return (
    <Typography variant='body1'>{courseDetailQuery.data?.moTa}</Typography>
  );
};

export default CourseDetailDescription;
