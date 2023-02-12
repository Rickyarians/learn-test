import { KeyboardType } from 'react-native';

export type PropsInput = {
  label?: string;
  labelColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value?: string;
  disable?: boolean;
  textColor?: string;
  type?: 'default' | 'password' | 'phone-number';
  focusedBorderColor?: string;
  blurBorderColor?: string;
  isPhoneNumber?: boolean;
  multiline?: boolean;
  autoFocus?: boolean;
  keyboardType?: KeyboardType;
  error?: Object;
  style?: Object;
  onSubmitEditing?: () => void;
  control?: any;
  name?: string;
  errorMessage?: string;
  textAlignVertical?: 'top' | 'center';
};
