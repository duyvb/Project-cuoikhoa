import {useQuery} from '@tanstack/react-query';
import {userServices} from '../../../services/userServices';

const useUserDetail = () => {
  return useQuery(
    ['userDetail'],
    () => {
      return userServices.getUserDetail();
    },
    {
      staleTime: 0,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  );
};

export default useUserDetail;
