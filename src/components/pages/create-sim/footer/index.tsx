import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button } from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'app/utils';
import { Next } from 'app/assets/icon';
import { Text } from 'app/components/items';
import { FontSize } from 'types';

type Prop = {
  isLoading?: boolean;
  onPress?: () => void;
};

export const FooterOnboarding: React.FC<Prop> = ({ isLoading, onPress }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: colors.background_color,
      height: heightPercentageToDP(10),
      width: widthPercentageToDP(100),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    shadow: {
      height: heightPercentageToDP(19),
      position: 'absolute',
      bottom: heightPercentageToDP(-6),
      width: heightPercentageToDP(100),
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginRight: widthPercentageToDP(3),
      marginBottom: 4,
    },
  });

  const backgroundColor = isLoading ? colors.shadow_primary : colors.primary;

  return (
    <React.Fragment>
      <LinearGradient colors={['#FFFFFF00', 'lightgrey']} style={styles.shadow} />
      <View style={styles.footer}>
        <Button onPress={onPress} backgroundColor={backgroundColor} style={styles.button}>
          <Text type="regular" size={FontSize.caption} color={'white'} style={styles.text}>
            Lanjutkan
          </Text>
          {isLoading ? <ActivityIndicator color={'lightgrey'} /> : <Next fill={'lightgrey'} />}
        </Button>
      </View>
    </React.Fragment>
  );
};
