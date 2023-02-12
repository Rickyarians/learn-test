/* eslint-disable react-native/no-inline-styles */
import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput as TextInputRN,
  Animated,
  Platform,
} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { isEmpty } from 'lodash';
import { RFValue } from 'react-native-responsive-fontsize';

import { Text } from 'app/components';
import { RadiusSizes, FontSize, PropsInput } from 'types';
import { Eye, EyeOff } from 'app/assets/icon';
import { useTheme } from 'app/utils';
import { useController } from 'react-hook-form';
import { useRef } from 'react';

export const TextInput: FC<PropsInput> = ({
  label,
  labelColor = 'grey',
  placeholder,
  onBlur = () => {},
  onFocus = () => {},
  blurBorderColor,
  textColor,
  type,
  disable = false,
  keyboardType,
  autoFocus,
  error = {},
  style,
  multiline,
  onSubmitEditing,
  control,
  name = '',
  errorMessage = '',
  textAlignVertical = 'center',
}: PropsInput) => {
  const animatedTextError: any = useRef(new Animated.Value(0)).current;
  const [hide, setHide] = useState<boolean>(true);
  const { colors } = useTheme();

  const onBlurInput = () => {
    onBlur();
  };

  const onFocusInput = () => {
    onFocus();
  };

  const toggleHide = () => {
    setHide(!hide);
  };

  const IconHide = hide ? Eye : EyeOff;

  const { field } = useController({ control, defaultValue: '', name });

  const animateError = useCallback(
    (toValue: number) => {
      Animated.spring(animatedTextError, {
        toValue,
        useNativeDriver: false,
      }).start();
    },
    [animatedTextError],
  );

  useEffect(() => {
    if (errorMessage) {
      if (!isEmpty(error)) {
        animateError(1);
      } else {
        animateError(0);
      }
    }
  }, [animateError, error, errorMessage]);

  const textPolate: any = animatedTextError.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });

  return (
    <View style={styles.container}>
      <Text
        type="semibold"
        style={[
          styles.label,
          { color: !isEmpty(error) ? colors.danger : colors.text || labelColor },
        ]}
        size={FontSize.description}>
        {label}
      </Text>
      <TextInputRN
        editable={!disable}
        textAlignVertical={textAlignVertical}
        value={field.value}
        placeholderTextColor={'#A4B9E0'}
        
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlurInput}
        multiline={multiline}
        autoFocus={autoFocus}
        selectionColor={colors.primary}
        onFocus={onFocusInput}
        keyboardType={keyboardType}
        onChangeText={field.onChange}
        style={[
          styles.input,
          {
            color: textColor,
            borderColor: !isEmpty(error) ? colors.danger : blurBorderColor || 'grey',
            borderWidth: !isEmpty(error) ? 1 : 0,
            backgroundColor: colors.grey,
          },
          style,
        ]}
        secureTextEntry={type === 'password' && hide}
        placeholder={placeholder}
      />
      {errorMessage.length !== 0 && (
        <Text
          type="light"
          color={colors.danger}
          size={7}
          style={[
            styles.textError,
            {
              opacity: animatedTextError,
              marginTop: textPolate,
              zIndex: -99,
            },
          ]}>
          {errorMessage}
        </Text>
      )}
      {type === 'password' && (
        <View style={[styles.abslute]}>
          <TouchableOpacity
            onPress={toggleHide}
            style={[
              styles.buttonIcon,
              {
                backgroundColor: colors.grey,
              },
            ]}>
            <IconHide height={heightPercentageToDP(3.5)} width={heightPercentageToDP(3.5)} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToDP(3),
  },
  label: { marginBottom: heightPercentageToDP(1.5) },
  input: {
    borderRadius: RadiusSizes.medium,
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(90),
    padding: 15,
    overflow: 'hidden',
    fontFamily: Platform.OS !== 'ios' ? 'Nunito-Semibold' : 'Nunito-Regular',
    fontSize: RFValue(Platform.OS !== 'ios' ? 7 : 6, widthPercentageToDP(100)),
  },
  abslute: {
    position: 'absolute',
    right: widthPercentageToDP(3),
    bottom: heightPercentageToDP(-1),
  },
  buttonIcon: {
    height: heightPercentageToDP(7 / 2),
    width: widthPercentageToDP(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHide: {
    height: 26,
    width: 26,
  },
  thin: {
    fontFamily: 'Montserrat-Thin',
  },
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
  semibold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  textError: {
    height: 20,
  },
});
