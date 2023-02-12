import { DataRegister } from 'types';

export const setDataRegister = (data: DataRegister) => ({
  type: 'SET_DATA_REGISTER',
  payload: data,
});
