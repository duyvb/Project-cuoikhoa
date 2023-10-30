import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {useState} from 'react';
import CoursesItem from './CoursesItem';

const CoursesList = (props) => {
  const theme = useTheme();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  const itemsPerPage = props.itemsPerPage;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box component='section' marginY={3}>
      <Container
        fixed
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
        }}
      >
        <Stack direction='column' alignItems='center' spacing={1.5}>
          <Typography
            variant='h4'
            component='h2'
            align='center'
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.primary.main,
            }}
          >
            {props.title}
          </Typography>
          <Typography align='center' variant='subtitle1'>
            {props.subtitle}
          </Typography>
        </Stack>
        <Grid container justifyContent='center' spacing={2}>
          {props.data
            ?.slice(
              itemsPerPage * (currentPage - 1),
              itemsPerPage * currentPage
            )
            .map((courseItem) => (
              <Grid key={courseItem.maKhoaHoc} item xs={12} md={6} lg={4}>
                <CoursesItem
                  courseId={courseItem.maKhoaHoc}
                  courseImage={courseItem.hinhAnh}
                  courseName={courseItem.tenKhoaHoc}
                  courseCategory={courseItem.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  courseDescription={courseItem.moTa}
                />
              </Grid>
            ))}
        </Grid>
        {props.data && props.data.length > itemsPerPage && (
          <Pagination
            count={Math.ceil(props.data.length / itemsPerPage)}
            page={currentPage}
            color='primary'
            onChange={handlePageChange}
            size={isLargerThanMd ? 'large' : 'medium'}
          />
        )}
      </Container>
    </Box>
  );
};

export default CoursesList;
