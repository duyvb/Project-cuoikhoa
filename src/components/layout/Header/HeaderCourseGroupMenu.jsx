import {Button, Fade, Menu, MenuItem, useTheme} from '@mui/material';
import {Stack} from '@mui/system';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useCourseCategories from '../../../hooks/queries/courses/useCourseCategories';
import Loading from '../../ui/Loading';

const HeaderCourseGroupMenu = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const courseCategoriesQuery = useCourseCategories();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    const categoryId = event.currentTarget.dataset.categoryId;
    const categoryName = event.currentTarget.dataset.categoryName;

    setAnchorEl(null);

    if (!categoryId || !categoryName) {
      return;
    }

    navigate(`/category/${encodeURI(categoryId)}`, {
      state: {categoryName: categoryName},
    });
  };

  if (courseCategoriesQuery.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Stack direction='row' alignItems='center'>
        <Button
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            width: 'max-content',
          }}
          onClick={handleButtonClick}
          variant='text'
        >
          Danh mục khóa học
        </Button>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
        transitionDuration={200}
      >
        {courseCategoriesQuery.data?.map((courseCategory) => (
          <MenuItem
            data-category-id={courseCategory.maDanhMuc}
            data-category-name={courseCategory.tenDanhMuc}
            onClick={handleMenuClose}
            key={courseCategory.maDanhMuc}
          >
            {courseCategory.tenDanhMuc}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HeaderCourseGroupMenu;
