export interface DataForgotPin {
  msisdn?: string;
  pin?: string;
}

export interface ForgotPinState {
  data_forgotpin: DataForgotPin;
}
