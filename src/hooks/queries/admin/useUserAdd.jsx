import {useMutation} from '@tanstack/react-query';
import adminServices from '../../../services/adminServices';
export function useAddUser(dataEdit) {
  return useMutation(() => {
    return adminServices.addUser(dataEdit);
  });
}
