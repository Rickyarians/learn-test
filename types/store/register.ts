export interface DataRegister {
  device_id?: string;
  msisdn?: string;
  nik?: string;
  is_petugas?: number;
  nrp?: string;
  pin?: string;
  img_face?: string | any;
  fcmToken?: string | any;
}

export interface RegisterState {
  data_register: DataRegister;
}
