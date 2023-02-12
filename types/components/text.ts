import { StyleProp, TextStyle } from 'react-native';
import { Colors } from '../index';

export enum FontSize {
  large_title = 16,
  title = 14,
  subtitle = 12,
  caption = 10,
  description = 8,
}

export interface TextProp {
  type: 'bold' | 'semibold' | 'regular' | 'light';
  align?: 'center' | 'right' | 'left' | 'justify';
  size?: FontSize | number;
  color?: Colors | string;
  style?: StyleProp<TextStyle>;
  children: any;
}
