import {useMutation} from '@tanstack/react-query';
import adminServices from '../../../services/adminServices';
export function useEditUser(dataEdit) {
  return useMutation(() => {
    return adminServices.editUser(dataEdit);
  });
}
