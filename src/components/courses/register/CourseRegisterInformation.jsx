import {Grid, Paper, Typography, useTheme} from '@mui/material';
import {Fragment} from 'react';
import {useParams} from 'react-router-dom';
import useCourseDetail from '../../../hooks/queries/courses/useCourseDetail';
import {localServices} from '../../../services/localServices';

const CourseRegisterInformation = () => {
  const theme = useTheme();
  const params = useParams();
  const courseDetailQuery = useCourseDetail(params.courseId);

  const courseDetailContent = [
    {
      id: 'studentName',
      title: 'Tên Học Viên',
      data: localServices.user.get()?.hoTen,
    },
    {
      id: 'courseName',
      title: 'Tên Khoá Học',
      data: courseDetailQuery.data?.tenKhoaHoc,
    },
    {
      id: 'courseDescription',
      title: 'Mô Tả',
      data: courseDetailQuery.data?.moTa,
    },
    {
      id: 'courseNumberStudent',
      title: 'Số Lượng Học Viên Hiện Tại',
      data: courseDetailQuery.data?.soLuongHocVien,
    },
  ];

  return (
    <Paper
      sx={{
        paddingInline: 1,
        paddingBlock: 2,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.tertiary.main,
        border: `1px solid ${theme.palette.warning.main}`,
      }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        sx={{
          '& > .MuiGrid-item:nth-of-type(2n + 1) + *': {
            marginTop: 0.5,
          },
          '& > .MuiGrid-item:nth-of-type(2n + 0) + *': {
            marginTop: 2,
          },
        }}
      >
        {courseDetailContent.map((courseItem) => (
          <Fragment key={courseItem.id}>
            <Grid item xs={12}>
              <Typography
                align='center'
                variant='h6'
                fontWeight={theme.typography.fontWeightBold}
                component='p'
                sx={{color: theme.palette.warning.main}}
              >
                {courseItem.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center' variant='body1' component='p'>
                {courseItem.data}
              </Typography>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Paper>
  );
};

export default CourseRegisterInformation;
