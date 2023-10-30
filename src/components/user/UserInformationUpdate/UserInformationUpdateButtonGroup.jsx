import {Button} from '@mui/material';
import {Stack} from '@mui/system';
import {useDispatch} from 'react-redux';
import {modalAction} from '../../../store/modalSlice';

const UserInformationUpdateButtonGroup = () => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(modalAction.setUserUpdateInfoModal(false));
  };

  return (
    <Stack spacing={1.5}>
      <Button type='submit' size='large' variant='contained' color='primary'>
        Cập Nhật Thông Tin
      </Button>
      <Button
        onClick={handleCancel}
        type='button'
        size='large'
        variant='outlined'
        color='primary'
      >
        Hủy Bỏ
      </Button>
    </Stack>
  );
};

export default UserInformationUpdateButtonGroup;
