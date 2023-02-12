import React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { LineChart } from 'react-native-chart-kit';

import { Layout, Text } from 'app/components';
import { useTheme } from 'app/utils';
import { FontSize, RadiusSizes } from 'types';
import { images } from 'app/themes';
import { Back, Back2, Filter } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';

const NotifSurat = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const { navigate }: any = useNavigation();
  const styles = StyleSheet.create({
    container: {
      height: heightPercentageToDP(Platform.OS === 'ios' ? 56 : 58),
      width: widthPercentageToDP(100),
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderBottomLeftRadius: RadiusSizes.extra_large,
      borderBottomRightRadius: RadiusSizes.extra_large,
      paddingVertical: 10
    },
    containerHeader: {
      height: heightPercentageToDP(12),
      width: widthPercentageToDP(100),
      // backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -50,
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
      // width: widthPercentageToDP(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      height: widthPercentageToDP(6),
      alignSelf: 'center',
    },
  });
 

 
  return (
    <Layout>
      <View style={{backgroundColor: '#F0F3FA', height: heightPercentageToDP(90)}}>
      
      </View>
    </Layout>
  );
};

export default NotifSurat
