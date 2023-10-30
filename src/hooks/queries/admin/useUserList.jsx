import {useQuery} from '@tanstack/react-query';
import adminServices from '../../../services/adminServices';

const useUserList = () => {
  return useQuery(['UserList'], () => adminServices.getUserList());
};

export default useUserList;
