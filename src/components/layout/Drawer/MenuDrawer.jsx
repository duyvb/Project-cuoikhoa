import {Divider, Drawer, Stack} from '@mui/material';
import HeaderLogo from '../Header/HeaderLogo';
import MenuDrawerButtonGroup from './MenuDrawerButtonGroup';
import MenuDrawerCourseCategories from './MenuDrawerCourseCategories';
import MenuDrawerSearchBar from './MenuDrawerSearchBar';

const MenuDrawer = (props) => {
  return (
    <Drawer anchor='left' open={props.open} onClose={props.onClose}>
      <Stack paddingY={3} paddingX={2} spacing={3}>
        <HeaderLogo />
        <MenuDrawerSearchBar onClose={props.onClose} />
        <MenuDrawerCourseCategories onClose={props.onClose} />
        <Divider />
        <MenuDrawerButtonGroup onClose={props.onClose} />
      </Stack>
    </Drawer>
  );
};

export default MenuDrawer;
