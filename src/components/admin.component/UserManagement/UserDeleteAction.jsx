import React from 'react';
import {useQueryClient} from '@tanstack/react-query';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import {useState} from 'react';
import {useDeleteUser} from '../../../hooks/queries/admin/useUserDelete';
import useNotification from '../../../hooks/ui/useNotification';

function UserDeleteAction({data}) {
  const queryClient = useQueryClient();
  const [openDelete, setOpenDelete] = useState(false);
  const [taiKhoan, setTaiKhoan] = useState();
  const deleteUserQuery = useDeleteUser(taiKhoan);
  const {displayNotification} = useNotification();
  const handleDeleteUser = () => {
    deleteUserQuery.mutate(taiKhoan, {
      onSuccess: () => {
        displayNotification({
          message: `Đã xóa ${data?.taiKhoan} thành công`,
          type: 'success',
        });
        queryClient.invalidateQueries(['UserList']);
      },
      onError: (error) => {
        const errorMessage = error.response.data;
        if (errorMessage) {
          displayNotification({
            message: `Không thể xóa ${data?.taiKhoan}! ${errorMessage}`,
            type: 'error',
          });
        } else {
          displayNotification({
            message: `Không thể xóa ${data?.taiKhoan}!`,
            type: 'error',
          });
        }
      },
    });
  };
  return (
    <>
      <Dialog
        id='deleteUserDialog'
        open={openDelete}
        onClose={() => {
          setOpenDelete(false);
        }}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogTitle id='dialog-title'> Xác nhận xóa </DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Bạn có chắc chắn muốn xóa user: {data?.taiKhoan} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleDeleteUser(data.taiKhoan);
              setOpenDelete(false);
            }}
          >
            Xác nhận xóa
          </Button>
          <Button
            onClick={() => {
              setOpenDelete(false);
            }}
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => {
          setOpenDelete(true);
          setTaiKhoan(data.taiKhoan);
        }}
        variant='contained'
      >
        Xóa
      </Button>
    </>
  );
}

export default UserDeleteAction;
