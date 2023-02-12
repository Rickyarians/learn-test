import { AuthState } from 'types';

const initialState: AuthState = {
  user_data: {
    id_user: '',
    device_id: '',
    msisdn: '',
    nik: '',
    is_petugas: 0,
    nrp: '',
    tgl_reg: '',
    img_face: '',
    login_status: false,
    token: '',
    token_exp: '',
    rating: false
  },
  ktp_data: {
    nik: '',
    nama: '',
    jk: '',
    tmp_lahir: '',
    tgl_lahir: '',
    agama: '',
    kawin: '',
    pendidikan: '',
    pekerjaan: '',
    propinsi: '',
    kabupaten: '',
    kecamatan: '',
    kel_desa: '',
    rt_rw: '',
  alamat: '',
  gol_darah: '',
  usia: '',
  last_update: '',
  foto: ''
  },
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case 'STORE_USER_DATA':
      return {
        ...state,
        user_data: action.payload,
      };

    case 'STORE_KTP_DATA':
      return {
        ...state,
        ktp_data: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
