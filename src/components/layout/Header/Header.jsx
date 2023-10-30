import MenuIcon from '@mui/icons-material/Menu';
import {Box, IconButton, Stack, useMediaQuery, useTheme} from '@mui/material';
import {Container} from '@mui/system';
import {useCallback, useState} from 'react';
import useCourseCategories from '../../../hooks/queries/courses/useCourseCategories';
import Loading from '../../ui/Loading';
import MenuDrawer from '../Drawer/MenuDrawer';
import HeaderButtonGroup from './HeaderButtonGroup';
import HeaderCourseGroupMenu from './HeaderCourseGroupMenu';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallerThanLg = useMediaQuery(theme.breakpoints.down('lg'));
  const courseCategoriesQuery = useCourseCategories();

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  if (courseCategoriesQuery.isLoading) {
    return <Loading />;
  }

  return (
    <Box
      component='header'
      sx={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 3,
        background: theme.palette.tertiary.main,
      }}
    >
      <Container fixed>
        <Stack
          paddingY={2}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          spacing={1}
        >
          <HeaderLogo />
          {!isSmallerThanLg && (
            <>
              <HeaderCourseGroupMenu />
              <HeaderButtonGroup />
            </>
          )}
          {isSmallerThanLg && (
            <>
              <IconButton
                onClick={handleOpenDrawer}
                sx={{
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              >
                <MenuIcon color='primary' />
              </IconButton>
              <MenuDrawer onClose={handleCloseDrawer} open={isDrawerOpen} />
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
