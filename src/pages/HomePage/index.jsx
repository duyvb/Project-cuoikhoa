import {useMediaQuery, useTheme} from '@mui/material';
import Carousel from '../../components/carousel/Carousel';
import CoursesList from '../../components/courses/general/CoursesList';
import useCoursesList from '../../hooks/queries/courses/useCoursesList';

const HomePage = () => {
  const theme = useTheme();
  const coursesListQuery = useCoursesList();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Carousel />
      <CoursesList
        title='Các khóa học mới nhất'
        subtitle='Bấm đăng ký để ghi danh ngay'
        itemsPerPage={isLargerThanMd ? 6 : 3}
        data={coursesListQuery.data && coursesListQuery.data}
      />
    </>
  );
};

export default HomePage;
