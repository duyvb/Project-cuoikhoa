import {useQuery} from '@tanstack/react-query';
import coursesServices from '../../../services/coursesServices';

const useCoursesSearchResult = (searchData) => {
  return useQuery(
    ['coursesSearchResult', searchData],
    () => coursesServices.getSearchCoursesResult(searchData),
    {
      enabled: !!searchData,
      retry: 0,
    }
  );
};

export default useCoursesSearchResult;
