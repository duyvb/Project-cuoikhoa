import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {useState} from 'react';
import UserDetailTabPanel from './UserDetailTabPanel';

const UserDetailTab = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabTitleContent = [
    {
      id: 'userDetail',
      content: 'Thông tin chi tiết',
    },
    {
      id: 'userRegisteredCourses',
      content: 'Khóa học đã đăng ký',
    },
  ];

  return (
    <Box
      marginTop={4}
      padding={2}
      sx={{
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          height: '400px',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '15px',
        },
      }}
    >
      <Tabs
        orientation={!isLargerThanMd ? 'horizontal' : 'vertical'}
        variant='fullWidth'
        value={value}
        onChange={handleChange}
        sx={{
          '& .MuiTabs-scroller': {
            overflow: 'auto !important',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
          [theme.breakpoints.up('md')]: {
            width: '300px',
            '& .MuiTabs-flexContainer': {
              gap: 1.5,
            },
          },
          [theme.breakpoints.up('lg')]: {
            width: '350px',
          },
        }}
      >
        {tabTitleContent.map((tabTitle) => (
          <Tab
            key={tabTitle.id}
            sx={{minWidth: 'max-content'}}
            label={
              <Box
                sx={{
                  [theme.breakpoints.up('md')]: {
                    paddingBlock: 1,
                    background: theme.palette.primary.main,
                    borderRadius: '15px',
                    width: '100%',
                  },
                }}
              >
                <Typography
                  variant='body1'
                  fontWeight={theme.typography.fontWeightBold}
                  sx={{
                    textTransform: 'capitalize',
                    whiteSpace: 'nowrap',
                    minWidth: 'max-content',
                    color: !isLargerThanMd
                      ? theme.palette.primary.main
                      : 'white',
                  }}
                >
                  {tabTitle.content}
                </Typography>
              </Box>
            }
          />
        ))}
      </Tabs>
      <UserDetailTabPanel value={value} />
    </Box>
  );
};

export default UserDetailTab;
