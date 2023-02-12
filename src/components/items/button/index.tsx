import { useTheme } from 'app/utils';
import React from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity, View } from 'react-native';
import { StyleProp } from 'react-native';
import { Colors, FontSize, RadiusSizes } from 'types';
import { Text } from 'app/components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

type PropButton = {
  title?: string;
  children?: any;
  backgroundColor?: Colors | any;
  onPress?: () => void;
  labelColor?: Colors;
  style?: StyleProp<ViewStyle>;
  type?: 'button' | 'tooltip';
  disabled?: boolean;
};

export const Button: React.FC<PropButton> = ({
  style,
  children,
  backgroundColor,
  onPress,
  labelColor,
  title,
  type,
  disabled,
}) => {
  const { colors } = useTheme();
  const withTitle: any = title && {
    justifyContent: 'center',
    alignItems: 'center',
  };
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP(90),
      height: heightPercentageToDP(7),
      borderRadius: RadiusSizes.large,
      alignSelf: 'center',
    },
    containerTooltip: {
      paddingHorizontal: widthPercentageToDP(2),
      height: heightPercentageToDP(5),
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: RadiusSizes.medium,
    },
  });

  const Touchable: any = disabled ? View : TouchableOpacity;

  return (
    <React.Fragment>
      {type === 'button' ? (
        <Touchable
          activeOpacity={0.7}
          onPress={onPress}
          style={[
            { backgroundColor: disabled ? backgroundColor + 80 : backgroundColor },
            styles.container,
            withTitle,
            style,
          ]}>
          {title ? (
            <Text type="regular" size={FontSize.caption} color={'white' || labelColor}>
              {title}
            </Text>
          ) : (
            children
          )}
        </Touchable>
      ) : (
        <Touchable
          onPress={onPress}
          style={[
            style,
            { backgroundColor: disabled ? backgroundColor + 80 : backgroundColor },
            styles.containerTooltip,
            withTitle,
          ]}>
          <Text type="regular" size={FontSize.description} color={colors.primary || labelColor}>
            {title}
          </Text>
        </Touchable>
      )}
    </React.Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
};
