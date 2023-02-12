import { Method } from 'axios';

export enum Endpoint {
  check_phone_number = 'kyc/cekphone.php',
  register = 'kyc/register.php',
  login = 'kyc/login.php',
  check_ktp = 'kyc/ktp.php',
  nik_to_sim = 'nik2simf.php',
  detail_pelanggaran = 'api/detail.php',
  detail_pelanggaran_media = 'api/media.php',
  post_konfirmasi = 'apiEtleIncar/ApiKonfirm',
  post_lapor_jual = 'apiEtleIncar/ApiLaporJual',
  post_lapor_pinjam = 'apiEtleIncar/ApiLaporPinjam',
  post_lapor_hilang = 'apiEtleIncar/ApiLaporHilang',
  check_nrp = 'kyc/nrp.php',
  list_pelanggaran = 'api/datalist_nik.php',
  cek_nik = 'kyc/ceknik.php',
  post_msisdn = 'kyc/msisdn.php',
}

export enum BaseURL {
  incar = 'https://incar.lasbontech.co.id/',
  etle = 'https://etle-incar.lasbontech.co.id/',
  temporary_base_119 = 'http://119.82.242.226:60001/',
}

export type BaseRequest = {
  /**
   * URL data for call the request api
   * must be string and call it for Endpoint types in the 'app/types'
   */
  baseUrl: BaseURL;
  /**
   * URL data for call the request api
   * must be string and call it for Endpoint types in the 'app/types'
   */
  endpoint: Endpoint;
  /**
   * Method for action the request api
   * must be string and one of item
   */
  method: Method;
  /**
   * data for the request post, put, patch
   * must be object and look the Backend requirement
   */
  body?: Object;
  /**
   * params like a body, just but it this for requirements
   * must be object and look the Backend requirement
   */
  params?: Object;
  /**
   * headers must be fill with object, axios will detect it
   * must be object and look the Backend requirement
   */
  headers?: Object;
  /**
   * id like params, but without the key
   * must be object and look the Backend requirement
   */
  id?: string;
};

export type ResultType = {
  status: 'loading' | 'success' | 'error';
  status_code: string | number;
  data: any;
  [key: string]: any;
};
