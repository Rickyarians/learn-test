import { useTheme } from 'app/utils';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { RFValue as fs } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import { FontSize, TextProp } from 'types';

export const Text = ({
  children,
  size = FontSize.subtitle,
  align = 'left',
  type,
  style,
  color,
}: TextProp) => {
  const { colors } = useTheme();
  const styleType: { fontFamily: string } = { fontFamily: 'Nunito-Regular' };

  const TextStyles: any[] = [
    type === 'light' && {
      ...styleType,
      fontFamily: 'Nunito-Regular',
      color: color || colors.text,
    },
    type === 'regular' && {
      ...styleType,
      fontFamily: 'Nunito-SemiBold',
      color: color || colors.text,
    },
    type === 'semibold' && {
      ...styleType,
      fontFamily: 'Nunito-Bold',
      color: color || colors.text,
    },
    type === 'bold' && {
      ...styleType,
      fontFamily: 'Nunito-ExtraBold',
      color: color || colors.text,
    },
  ];

  const styles = StyleSheet.create({
    text: {
      fontSize: fs(size, widthPercentageToDP(100)),
      textAlign: align,
    },
  });

  return (
    <Animated.Text
      minimumFontScale={FontSize.description}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      style={[styles.text, TextStyles, style]}>
      {children}
    </Animated.Text>
  );
};
