import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Text } from 'app/components';
import Toast from 'react-native-toast-message';
import { useTheme } from 'app/utils';
import { FontSize, RadiusSizes } from 'types';

type PropsToast = {
  message: string;
  type: 'error' | 'success' | 'info';
};

const CustomToast: FC<PropsToast> = ({ message, type }: PropsToast) => {
  const onHide = () => Toast.hide();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onHide}
      activeOpacity={0.9}
      style={[
        styles.toast,
        {
          backgroundColor:
            type === 'error' ? colors.danger : type === 'success' ? colors.success : colors.primary,
        },
      ]}>
      <Text type="regular" size={FontSize.description} color={'white'} style={styles.contentToast}>
        {message}
      </Text>
    </TouchableOpacity>
  );
};

export const showToast: Function = ({ message, type }: PropsToast) => {
  Toast.show({
    type: type,
    text1: message,
    position: 'bottom',
    visibilityTime: 3000,
  });
};

const styles = StyleSheet.create({
  toast: {
    width: widthPercentageToDP(90),
    paddingVertical: heightPercentageToDP(2),
    flexDirection: 'row',
    borderRadius: RadiusSizes.medium,
    justifyContent: 'space-around',
    alignItems: 'center',
    opacity: 0.9,
    backgroundColor: 'black',
    paddingHorizontal: widthPercentageToDP(2),
    zIndex: 999999,
  },
  contentToast: {
    width: widthPercentageToDP(80),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  close: {
    backgroundColor: 'black',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
    padding: 5,
  },
});

export default CustomToast;
