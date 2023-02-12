import { ForgotPinState } from 'types';

const initialState: ForgotPinState = {
  data_forgotpin: {
    msisdn: '',
    pin: ''
  },
};

const forgotpin = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_DATA_FORGOTPIN':
      return {
        ...state,
        data_forgotpin: Object.assign(state.data_forgotpin, action.payload),
      };

    default:
      return state;
  }
};

export default forgotpin;
