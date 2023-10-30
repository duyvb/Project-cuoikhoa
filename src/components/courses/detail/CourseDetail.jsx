import {Box, Button, Grid, Stack, useMediaQuery, useTheme} from '@mui/material';
import {Container} from '@mui/system';
import {Link, useLocation, useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';
import Loading from '../../ui/Loading';
import CourseDetailMain from './CourseDetailMain';
import CourseDetailSideBar from './CourseDetailSideBar';
import CourseDetailTitle from './CourseDetailTitle';

const CourseDetail = () => {
  const theme = useTheme();
  const params = useParams();
  const location = useLocation();
  const courseDetailQuery = useCourseDetail(params.courseId);
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  if (courseDetailQuery.isLoading) {
    return <Loading />;
  }

  return (
    <Box paddingY={3}>
      <Container fixed>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          spacing={isLargerThanMd ? 4 : 2}
        >
          <Grid item xs={12} md={5} order={isLargerThanMd && 2}>
            <Stack spacing={4}>
              {!isLargerThanMd && <CourseDetailTitle />}
              <CourseDetailSideBar data={courseDetailQuery.data} />
              {isLargerThanMd && (
                <Button
                  component={Link}
                  to={`/registerCourse/${params.courseId}`}
                  state={location.pathname}
                  fullWidth
                  size='large'
                  variant='contained'
                  color='primary'
                >
                  Đăng ký
                </Button>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={7} order={isLargerThanMd && 1}>
            <CourseDetailMain />
          </Grid>
          <Grid item xs={12} sx={{display: isLargerThanMd ? 'none' : 'block'}}>
            <Button
              component={Link}
              to={`/registerCourse/${params.courseId}`}
              state={location.pathname}
              fullWidth
              size='large'
              variant='contained'
              color='primary'
            >
              Đăng ký
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseDetail;
