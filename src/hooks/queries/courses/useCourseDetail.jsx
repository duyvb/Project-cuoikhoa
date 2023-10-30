import {useQuery} from '@tanstack/react-query';
import coursesServices from '../../../services/coursesServices';

const useCourseDetail = (courseId) => {
  return useQuery(
    ['courseItemInfo', courseId],
    () => coursesServices.getCourseDetail(courseId),
    {enabled: !!courseId}
  );
};

export default useCourseDetail;
