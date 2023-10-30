import {useMediaQuery, useTheme} from '@mui/material';
import _ from 'lodash';
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import CoursesList from '../../components/courses/general/CoursesList';
import Loading from '../../components/ui/Loading';
import useCoursesSearchResult from '../../hooks/queries/courses/useCoursesSearchResult';

const SearchPage = () => {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const searchData = searchParams.get('searchData');
  const coursesSearchResultQuery = useCoursesSearchResult(searchData);
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  if (coursesSearchResultQuery.isLoading && searchData) {
    return <Loading />;
  }

  let coursesListTitle = !searchData
    ? 'Vui lòng nhập khoá học cần tìm vào ô tìm kiếm'
    : coursesSearchResultQuery.data
    ? `Tìm thấy ${coursesSearchResultQuery.data?.length} khoá học ${_.startCase(
        _.toLower(searchData)
      )}`
    : `Không tìm thấy khoá học nào có liên quan đến ${_.startCase(
        _.toLower(searchData)
      )}`;

  const coursesListSubtitle = !searchData
    ? ''
    : coursesSearchResultQuery.data
    ? 'Vui lòng xem kết quả tìm kiếm bên duới'
    : 'Vui lòng tìm kiếm khoá học khác';

  return (
    <>
      <CoursesList
        title={coursesListTitle}
        subtitle={coursesListSubtitle}
        itemsPerPage={isLargerThanMd ? 6 : 3}
        data={coursesSearchResultQuery.data && coursesSearchResultQuery.data}
      />
    </>
  );
};

export default SearchPage;
