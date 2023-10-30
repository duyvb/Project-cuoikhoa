import {useQuery} from '@tanstack/react-query';
import coursesServices from '../../../services/coursesServices';

const useCourseCategories = () => {
  return useQuery(['courseCategories'], () =>
    coursesServices.getCourseCategories()
  );
};

export default useCourseCategories;
