export interface UserData {
  id_user: string;
  device_id: string;
  msisdn: string;
  nik: string;
  is_petugas: number;
  nrp: string;
  tgl_reg: string;
  img_face: string;
  login_status: boolean;
  token: string;
  token_exp: string;
  sim: any;
}

export interface DataKTP {
  nik: any,
  nama: any,
  jk: any,
  tmp_lahir: any,
  tgl_lahir: any,
  agama: any,
  kawin: any,
  pendidikan: any,
  pekerjaan: any,
  propinsi: any,
  kabupaten: any,
  kecamatan: any,
  kel_desa: any
  rt_rw: any,
  alamat: any,
  gol_darah: any,
  usia: any,
  last_update: any,
  foto:any
}

export interface AuthState {
  user_data: UserData;
  ktp_data: DataKTP;
}
