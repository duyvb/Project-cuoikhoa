import {useMediaQuery, useTheme} from '@mui/material';
import {Stack} from '@mui/system';
import CourseDetailDescription from './CourseDetailDescription';
import CourseDetailTitle from './CourseDetailTitle';

function CourseDetailMain(props) {
  const theme = useTheme();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Stack spacing={3}>
      {isLargerThanMd && <CourseDetailTitle />}
      <CourseDetailDescription />
    </Stack>
  );
}

export default CourseDetailMain;
