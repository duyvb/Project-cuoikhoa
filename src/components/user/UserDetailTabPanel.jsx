import {Box, useMediaQuery, useTheme} from '@mui/material';
import {Stack} from '@mui/system';
import PropTypes from 'prop-types';
import UserCourse from './UserCourses';
import UserInfor from './UserInfor';

const TabPanel = (props) => {
  const theme = useTheme();
  const {children, value, index, ...other} = props;
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box paddingY={2} sx={{width: '100%'}} hidden={value !== index} {...other}>
      {value === index && (
        <Stack
          spacing={1.5}
          paddingX={!isLargerThanMd ? 0.5 : 2}
          sx={{
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {children}
        </Stack>
      )}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const UserDetailTabPanel = ({value}) => {
  return (
    <>
      <TabPanel value={value} index={0}>
        {value === 0 && <UserInfor />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {value === 1 && <UserCourse />}
      </TabPanel>
    </>
  );
};

export default UserDetailTabPanel;
