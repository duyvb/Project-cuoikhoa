import {useMutation} from '@tanstack/react-query';
import adminServices from '../../../services/adminServices';
export function useDeleteUser(taiKhoan) {
  return useMutation(() => {
    return adminServices.deleteUser(taiKhoan);
  });
}
