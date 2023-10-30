import {Button} from '@mui/material';
import {Container} from '@mui/system';
import {Link} from 'react-router-dom';
import UserTable from './UserTable';

function UserManagment() {
  return (
    <Container fixed>
      <Link
        style={{textDecoration: 'none', margin: 'auto'}}
        to='/admin/add-user'
      >
        <Button variant='contained'>Thêm người dùng </Button>
      </Link>
      <UserTable />
    </Container>
  );
}

export default UserManagment;
