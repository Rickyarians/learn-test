import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button } from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'app/utils';
import { Text } from 'app/components/items';
import { FontSize } from 'types';
import { Platform } from 'react-native';

type Prop = {
  isLoading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  title?: string;
};

export const FooterSmartTilang: React.FC<Prop> = ({ isLoading, onPress, disabled, title }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors.background_color,
      height: heightPercentageToDP(12),
      width: widthPercentageToDP(100),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    shadow: {
      height: heightPercentageToDP(19),
      position: 'absolute',
      bottom: -heightPercentageToDP(Platform.OS !== 'ios' ? 6 : 2),
      width: heightPercentageToDP(100),
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginRight: widthPercentageToDP(3),
    },
  });

  const backgroundColor = disabled
    ? colors.shadow_primary
    : isLoading
    ? colors.shadow_primary
    : colors.primary;

  return (
    <React.Fragment>
      <LinearGradient colors={['#FFFFFF00', '#000000']} style={styles.shadow} />
      <View style={styles.footer}>
        <Button
          onPress={disabled ? () => {} : onPress}
          backgroundColor={backgroundColor}
          style={styles.button}>
          <Text type="regular" size={FontSize.description} color={'white'} style={styles.text}>
            {title ? title : 'Kirim'}
          </Text>
          {isLoading && <ActivityIndicator color={'lightgrey'} />}
        </Button>
      </View>
    </React.Fragment>
  );
};
