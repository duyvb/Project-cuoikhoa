import {useQuery} from '@tanstack/react-query';
import coursesServices from '../../../services/coursesServices';

const useCoursesListByCategory = (categoryId) => {
  return useQuery(
    ['coursesListByCategory', categoryId],
    () => coursesServices.getCoursesListByCategory(categoryId),
    {
      enabled: !!categoryId,
      retry: 0,
    }
  );
};

export default useCoursesListByCategory;
