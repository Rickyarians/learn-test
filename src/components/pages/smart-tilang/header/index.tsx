import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Text } from 'app/components/items';
import { useTheme } from 'app/utils';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FontSize, RadiusSizes } from 'types';
import { Back } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';

type Prop = {
  title: string;
};

export const HeaderTitle: React.FC<Prop> = ({ title }) => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const styles = StyleSheet.create({
    container: {
      height: heightPercentageToDP(12),
      width: widthPercentageToDP(100),
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: heightPercentageToDP(4),
      borderBottomLeftRadius: RadiusSizes.extra_large,
      borderBottomRightRadius: RadiusSizes.extra_large,
    },
    backButton: {
      height: widthPercentageToDP(10),
      width: widthPercentageToDP(10),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: widthPercentageToDP(3),
    },
    row: {
      flexDirection: 'row',
      width: widthPercentageToDP(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      height: widthPercentageToDP(6),
      alignSelf: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Back fill={colors.light} />
        </TouchableOpacity>
        <Text type="semibold" color={colors.light} size={FontSize.description} style={styles.text}>
          {title}
        </Text>
      </View>
    </View>
  );
};
