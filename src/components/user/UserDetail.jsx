import {Box, Container} from '@mui/material';
import useUserDetail from '../../hooks/queries/user/useUserDetail';
import Loading from '../ui/Loading';
import UserDetailTab from './UserDetailTab';
import UserDetailTitle from './UserDetailTitle';
import UserInformationUpdate from './UserInformationUpdate/UserInformationUpdate';

function UserDetail() {
  const userDetailQuery = useUserDetail();

  if (userDetailQuery.isLoading) {
    return <Loading />;
  }

  return (
    <Box paddingY={3}>
      <UserInformationUpdate />
      <Container fixed>
        <UserDetailTitle />
        <UserDetailTab />
      </Container>
    </Box>
  );
}

export default UserDetail;
