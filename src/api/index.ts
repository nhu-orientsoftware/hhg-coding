import { AxiosService } from '../services/axiosService';

type TParams = {
  page?: number,
  limit?: number,
};
type TBody = {
  name: string,
  email: string,
  position: string
};

export const getEmployees = (param: TParams) => AxiosService.get('/users?sortBy=createdAt&order=desc', param);

export const addEmployee = (body: TBody) => AxiosService.post('/users', body);
