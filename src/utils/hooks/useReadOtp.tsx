import { useEffect, useState } from 'react';
import Clipboard from '@react-native-community/clipboard';

export const useReadOtp = () => {
  const [otp, setOtp] = useState<string>('');
  useEffect(() => {
    // only on android
    const writeClipboard = async () => {
      await Clipboard.setString('');
    };
    const readClipboard = async () => {
      const clipboard = await Clipboard.getString();
      const regexp = new RegExp(`^\\d{${4}}$`);
      if (regexp.test(clipboard)) {
        // set otp for the controlled CodeField component
        setOtp(clipboard);
        clearInterval(interval);
      }
    };
    // reset clipboard
    writeClipboard();
    const interval = setInterval(() => {
      // check clipboard every second
      readClipboard();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { otpCode: otp };
};
