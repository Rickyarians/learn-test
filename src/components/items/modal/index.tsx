import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { useTheme } from 'app/utils';
import { useRef } from 'react';
import { Animated } from 'react-native';
import { useCallback } from 'react';

type ModalProps = {
  isVisible: boolean;
  height: number;
  onClose: () => void;
  children: any;
  isBigComponent?: boolean;
};

export const ModalSheet: FC<ModalProps> = ({
  isVisible,
  height,
  onClose = () => {},
  children,
  isBigComponent,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);
  const { colors } = useTheme();
  const heightTrue = Math.max(Dimensions.get('window').height, Dimensions.get('screen').height);
  const animatedComponent = useRef(new Animated.Value(0)).current;

  const mountedAnimated = useCallback(
    (toValue: number) => {
      Animated.timing(animatedComponent, {
        toValue,
        useNativeDriver: true,
      }).start();
    },
    [animatedComponent],
  );

  useEffect(() => {
    if (isVisible) {
      if (isBigComponent) {
        setTimeout(() => {
          setVisibleComponent(true);
          mountedAnimated(1);
        }, 500);
      } else {
        setVisibleComponent(true);
        mountedAnimated(1);
      }
      setVisible(true);
    } else {
      setVisibleComponent(false);
      setVisible(false);
    }
  }, [isBigComponent, isVisible, mountedAnimated]);

  const cancel = () => {
    setVisibleComponent(false);
    setVisible(false);
    onClose();
  };

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={cancel}
      onBackButtonPress={cancel}
      deviceHeight={heightTrue}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      useNativeDriver
      statusBarTranslucent
      style={styles.containerModal}>
      <View
        style={[
          styles.body,
          {
            height: heightPercentageToDP(height),
            backgroundColor: colors.background_color,
          },
        ]}>
        <View style={[styles.shadow, { backgroundColor: colors.background_color }]} />
        {visibleComponent ? (
          <Animated.View style={{ opacity: animatedComponent }}>{children}</Animated.View>
        ) : (
          <ActivityIndicator
            size={20}
            color={colors.primary}
            style={{ paddingTop: heightPercentageToDP(height / 2) }}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {},
  containerModal: {
    margin: heightPercentageToDP(0),
    justifyContent: 'flex-end',
  },
  shadow: {
    zIndex: 999,
    width: widthPercentageToDP(100),
    height: 2,
    elevation: 10,
  },
});
