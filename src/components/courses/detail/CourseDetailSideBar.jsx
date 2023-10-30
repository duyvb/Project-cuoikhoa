import {Stack} from '@mui/material';
import CourseDetailImage from './CourseDetailImage';
import CourseDetailInformation from './CourseDetailInformation';

function CourseDetailSideBar({data}) {
  return (
    <Stack alignItems='start' spacing={2}>
      <CourseDetailImage />
      <CourseDetailInformation />
    </Stack>
  );
}

export default CourseDetailSideBar;
