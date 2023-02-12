import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { isEmpty } from 'lodash';
import { FontSize, RadiusSizes } from 'types';

import { Text } from 'app/components/items';
import { useTheme } from 'app/utils';

type Prop = {
  placeholder?: string;
  label?: string;
  icon?: any;
  value?: any;
  error?: Object;
  full?: boolean,
  onPress?: () => void;
};

export const ButtonInput: React.FC<Prop> = ({
  placeholder,
  label,
  icon,
  value,
  error,
  full,
  onPress = () => {},
}) => {
  const { colors } = useTheme();

  const handlePress = () => {
    onPress();
  };

  return (
    <View>
      <Text
        type="semibold"
        style={[styles.label, { color: !isEmpty(error) ? colors.danger : colors.text }]}
        size={FontSize.description}>
        {label}
      </Text>
      <TouchableOpacity
        onPress={handlePress}
        style={full ? [styles.containerInputFull, { backgroundColor: colors.grey }] : [styles.containerInput, { backgroundColor: colors.grey }]}>
        <Text size={7} type="regular" color={value ? colors.text : '#A4B9E0'}>
          {value ? value : placeholder}
        </Text>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: { marginVertical: heightPercentageToDP(3) },
  containerInput: {
    borderRadius: RadiusSizes.medium,
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(40),
    padding: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerInputFull: {
    borderRadius: RadiusSizes.medium,
    height: heightPercentageToDP(7),
    // width: widthPercentageToDP(80),
    padding: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDays: {
    justifyContent: 'center',
    height: heightPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(5),
  },
});
