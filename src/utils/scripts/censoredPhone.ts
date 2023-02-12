export const censoredPhoneNumber = (phone: string) => {
  if (phone.substr(0, 2) === '08') {
    const phoneNumber = phone.substr(1);
    return (
      '62' +
      phoneNumber.split('').slice(0, 5).join('') +
      '****' +
      phoneNumber.split('').slice(9).join('')
    );
  } else if (phone.substr(0, 2) === '62') {
    const phoneNumber = phone.substr(2);
    return (
      phoneNumber.split('').slice(0, 5).join('') + '****' + phoneNumber.split('').slice(9).join('')
    );
  } else {
    return '62' + phone.split('').slice(0, 5).join('') + '****' + phone.split('').slice(9).join('');
  }
};
