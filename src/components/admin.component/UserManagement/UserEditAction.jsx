import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import {useState} from 'react';
import UserEditInput from './UserEditFormInput';
function UserEditAction({data}) {
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <>
      <Dialog
        id='editUserDialog'
        open={openEdit}
        onClose={() => {
          setOpenEdit(false);
        }}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogTitle id='dialog-title'> Sửa tài khoản</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Thay đổi thông tin tài khoản: {data?.taiKhoan} ?
          </DialogContentText>
          <UserEditInput data={data} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenEdit(false);
            }}
          >
            Hủy chỉnh sửa
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => {
          setOpenEdit(true);
        }}
      >
        Sửa
      </Button>
    </>
  );
}

export default UserEditAction;
