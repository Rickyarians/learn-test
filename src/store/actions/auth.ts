export const storeUserData = (data: any) => ({
  type: 'STORE_USER_DATA',
  payload: data,
});

export const storeKtpData = (data: any) => ({
  type: 'STORE_KTP_DATA',
  payload: data,
});
