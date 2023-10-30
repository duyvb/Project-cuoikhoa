import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, {useState} from 'react';
import useUserList from '../../../hooks/queries/admin/useUserList';
import UserAction from './UserAction';
function UserTable() {
  const theme = useTheme();
  const isLargerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  const userListQuery = useUserList();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const colTitle = [
    'Tài khoản',
    'Tên',
    'Điện thoại',
    'Email',
    'Loại',
    'Thao tác',
  ];

  const onRenderCol = () => {
    return colTitle.map((title, index) => {
      return (
        <TableCell
          sx={{
            color: 'white',
            fontSize: '16px',
            padding: '10px',
            fontWeight: '700',
          }}
          key={index}
        >
          {title}
        </TableCell>
      );
    });
  };

  const onRenderRow = () => {
    return userListQuery.data
      ?.slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage)
      .map((user, index) => {
        return (
          <TableRow
            key={index}
            sx={{
              '&:last-child td, &:last-child th': {border: 0},
            }}
          >
            <TableCell component='th' scope='row'>
              {user.taiKhoan}
            </TableCell>
            <TableCell>{user.hoTen}</TableCell>
            <TableCell>{user.soDt}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.maLoaiNguoiDung}</TableCell>
            <TableCell>
              <Stack flex={1} justifyContent='end'>
                <UserAction data={user} />
              </Stack>
            </TableCell>
          </TableRow>
        );
      });
  };

  return (
    <Box sx={{marginTop: '15px'}}>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead sx={{backgroundColor: 'rgba(128,128,128,0.8)'}}>
            <TableRow>{onRenderCol()}</TableRow>
          </TableHead>
          <TableBody>{onRenderRow()}</TableBody>
        </Table>
      </TableContainer>
      {userListQuery.data && userListQuery.data.length > itemsPerPage && (
        <Pagination
          sx={{marginTop: '20px'}}
          count={Math.ceil(userListQuery.data.length / itemsPerPage)}
          page={currentPage}
          color='primary'
          onChange={handlePageChange}
          size={isLargerThanMd ? 'large' : 'medium'}
        />
      )}
    </Box>
  );
}

export default UserTable;
