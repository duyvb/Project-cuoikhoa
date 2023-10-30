import {useDispatch} from 'react-redux';
import {notificationActions} from '../../store/notificationSlice';

const useNotification = () => {
  const dispatch = useDispatch();

  const displayNotification = (notificationOption) => {
    dispatch(notificationActions.addNotification(notificationOption));
  };

  const clearNotification = () => {
    dispatch(notificationActions.clearNotification());
  };

  return {displayNotification, clearNotification};
};

export default useNotification;
