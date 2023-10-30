import {useTheme} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import {modalAction} from '../../../store/modalSlice';
import UserInformationUpdateForm from './UserInformationUpdateForm';

const UserInformationUpdate = () => {
  const theme = useTheme();
  const isModalShow = useSelector((state) => state.modal.isUserUpdateInfoShow);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(modalAction.setUserUpdateInfoModal(false));
  };

  return (
    <Modal
      open={isModalShow}
      onClose={handleModalClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'background.paper',
          boxShadow: theme.shadows[20],
          borderRadius: '8px',
          padding: 4,
        }}
      >
        <Typography
          align='center'
          variant='h5'
          fontWeight={theme.typography.fontWeightBold}
          color='primary'
        >
          CẬP NHẬT THÔNG TIN NGƯỜI DÙNG
        </Typography>
        <UserInformationUpdateForm />
      </Box>
    </Modal>
  );
};

export default UserInformationUpdate;
