import {ExpandMore} from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import useCourseCategories from '../../../hooks/queries/courses/useCourseCategories';

const TypographyWithLink = styled(Typography)(({theme}) => ({
  cursor: 'pointer',
}));

const MenuDrawerCourseCategories = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const courseCategoriesQuery = useCourseCategories();

  const handleCourseCategoryClick = (categoryId, categoryName) => {
    props.onClose();
    navigate(`/category/${encodeURI(categoryId)}`, {
      state: {categoryName: categoryName},
    });
  };

  return (
    <Accordion
      sx={{
        borderRadius: '8px',
        background: theme.palette.primary.main,
        '&::before': {
          display: 'none',
        },
      }}
      TransitionProps={{timeout: 200}}
    >
      <AccordionSummary expandIcon={<ExpandMore sx={{color: 'white'}} />}>
        <Typography color='white'>Danh mục khóa học</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          divider={<Divider sx={{borderColor: '#ffffff50'}} />}
          spacing={1}
        >
          {courseCategoriesQuery.data?.map((courseCategory) => (
            <TypographyWithLink
              key={courseCategory.maDanhMuc}
              onClick={() =>
                handleCourseCategoryClick(
                  courseCategory.maDanhMuc,
                  courseCategory.tenDanhMuc
                )
              }
              color='white'
            >
              {courseCategory.tenDanhMuc}
            </TypographyWithLink>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuDrawerCourseCategories;
