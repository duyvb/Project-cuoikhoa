import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from '@mui/material';
import {Stack} from '@mui/system';
import {Link, useLocation} from 'react-router-dom';

const CoursesItem = (props) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Card>
      <CardMedia
        component='object'
        data={props.courseImage}
        height='300'
        sx={{width: '100%', objectFit: 'cover'}}
      >
        <img
          src='https://picsum.photos/400/300'
          width='100%'
          height='100%'
          alt='Some lorem picsum'
          style={{objectFit: 'cover'}}
        />
      </CardMedia>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          height: '170px',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Typography
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            variant='h6'
            component='p'
            color={theme.palette.primary.main}
          >
            {props.courseName}
          </Typography>
          <Chip
            variant='filled'
            color='warning'
            label={props.courseCategory}
            sx={{
              color: '#ffffff',
              fontWeight: theme.typography.fontWeightBold,
              whiteSpace: 'nowrap',
            }}
          ></Chip>
        </Stack>
        <Typography
          variant='body1'
          component='p'
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '3',
          }}
        >
          {props.courseDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'end'}}>
        <Button
          component={Link}
          to={`/detail/${props.courseId}`}
          state={location.pathname}
          variant='contained'
          color='primary'
        >
          Xem chi tiết
        </Button>
        <Button
          component={Link}
          to={`/registerCourse/${props.courseId}`}
          variant='contained'
          color='warning'
        >
          ĐĂNG KÝ
        </Button>
      </CardActions>
    </Card>
  );
};

export default CoursesItem;
