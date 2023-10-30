import {Grid, Stack, useMediaQuery, useTheme} from '@mui/material';
import {Box, Container} from '@mui/system';
import {useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';
import Loading from '../../ui/Loading';
import CourseRegisterButtonGroup from './CourseRegisterButtonGroup';
import CourseRegisterInformation from './CourseRegisterInformation';
import CourseRegisterTitle from './CourseRegisterTitle';

const CourseRegister = () => {
  const theme = useTheme();
  const params = useParams();
  const courseDetailQuery = useCourseDetail(params.courseId);
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  if (courseDetailQuery.isLoading) {
    return <Loading />;
  }

  return (
    <Box marginY={3} spacing={2}>
      <Container fixed>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={5} lg={6}>
            <Stack spacing={4} alignItems='center'>
              <CourseRegisterTitle />
              {isLargerThanMd && <CourseRegisterButtonGroup />}
            </Stack>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <Stack spacing={4} alignItems='center'>
              <CourseRegisterInformation />
              {!isLargerThanMd && <CourseRegisterButtonGroup />}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseRegister;
