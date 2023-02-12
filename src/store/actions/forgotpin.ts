import { DataForgotPin } from 'types';

export const setDataForgotPin = (data: DataForgotPin) => ({
  type: 'SET_DATA_FORGOTPIN',
  payload: data,
});
