import {Avatar} from '@mui/material';
import useUserDetail from '../../hooks/queries/user/useUserDetail';

function UserAvatar() {
  const userDetailQuery = useUserDetail();

  return (
    <Avatar
      sx={{
        width: '130px',
        height: '130px',
      }}
      alt={userDetailQuery.data.data?.hoTen}
      src='https://cdn-icons-png.flaticon.com/512/147/147144.png'
    />
  );
}

export default UserAvatar;
