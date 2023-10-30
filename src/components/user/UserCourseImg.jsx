/* eslint-disable jsx-a11y/alt-text */
import {Box} from '@mui/material';

const UserCourseImg = (props) => {
  return (
    <Box
      sx={{
        height: props.height ? props.height : 'auto',
        width: props.width ? props.width : '100%',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <img
        src={props.src}
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
      />
    </Box>
  );
};

export default UserCourseImg;
