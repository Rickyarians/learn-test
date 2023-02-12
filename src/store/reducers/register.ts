import { RegisterState } from 'types';

const initialState: RegisterState = {
  data_register: {
    device_id: '',
    msisdn: '',
    nik: '',
    is_petugas: 0,
    nrp: '',
    pin: '',
    img_face: '',
    fcmToken: ''
  },
};

const register = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_DATA_REGISTER':
      return {
        ...state,
        data_register: Object.assign(state.data_register, action.payload),
      };

    default:
      return state;
  }
};

export default register;
