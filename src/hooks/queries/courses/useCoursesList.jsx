import {useQuery} from '@tanstack/react-query';
import coursesServices from '../../../services/coursesServices';

const useCoursesList = () => {
  return useQuery(['coursesList'], () => coursesServices.getCoursesList());
};

export default useCoursesList;
