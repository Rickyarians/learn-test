import { showToast } from 'app/components';
import axios, { AxiosResponse } from 'axios';
import { BaseRequest, ResultType } from 'types';
// import { BASE_URL } from 'env';

/**
 * Request helper for HTTPRequest
 * @param params must receive Object
 * @param id must receive String or Number
 * @param headers must receive Object
 * @param body must receive Object
 * @param method from AxiosMethod type
 * @param baseUrl must receive Base URL type
 * @param endpoint must receive Endpoint type
 * and must return
 * @returns { ResultType }
 */

export const request = async ({
  params,
  id,
  headers,
  body,
  endpoint,
  method,
  baseUrl,
}: BaseRequest): Promise<ResultType> => {
  const url = id?.length !== 0 ? `${baseUrl}${endpoint}/` + id : `${baseUrl}${endpoint}`;
 
  try {
    const res: AxiosResponse = await axios({
      url,
      method,
      data: body,
      headers,
      params,
    });
    console.warn(res)

   

    const resultSuccess: ResultType = {
      status: 'success',
      status_code: res?.status,
      data: res?.data,
    };

    return resultSuccess;
    //End of schema success
  } catch ({ response }: any) {
    const resError: any = response;

    const resultError: ResultType = {
      status: 'error',
      status_code: resError?.status,
      data: resError?.data,
    };

    console.warn('isi error', resError)

    if (`${resError?.status}`[0] === '5') {
      showToast({ type: 'error', message: 'Server sedang dalam masa maintenance' });
    }

    if (`${resError?.status}`[0] === '4') {
      showToast({ type: 'error', message: 'Terjadi kesalahan pada request' });
    }

    return resultError;
    //End of schema error
  }
};
