import {useMediaQuery, useTheme} from '@mui/material';
import {useLocation, useParams} from 'react-router-dom';
import CoursesList from '../../components/courses/general/CoursesList';
import Loading from '../../components/ui/Loading';
import useCoursesListByCategory from '../../hooks/queries/courses/useCoursesListByCategory';

const CategoryPage = () => {
  const theme = useTheme();
  const params = useParams();
  const location = useLocation();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  const coursesListByCategoryQuery = useCoursesListByCategory(
    params.categoryId
  );

  if (coursesListByCategoryQuery.isLoading) {
    return <Loading />;
  }

  const categoryTitle = coursesListByCategoryQuery.data
    ? `Các Khóa Học Về ${location.state.categoryName}`.toUpperCase()
    : `Không Tìm Thấy Khóa Học Thuộc Về Danh Mục Này`.toUpperCase();

  const categorySubtitle = coursesListByCategoryQuery.data
    ? 'Vui lòng chọn khóa học mà bạn mong muốn'
    : 'Vui lòng chọn lại danh mục khóa học';

  return (
    <>
      <CoursesList
        title={categoryTitle}
        subtitle={categorySubtitle}
        data={
          coursesListByCategoryQuery.data && coursesListByCategoryQuery.data
        }
        itemsPerPage={isLargerThanMd ? 6 : 3}
      />
    </>
  );
};

export default CategoryPage;
