import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { Text } from 'app/components/items';
import { useTheme } from 'app/utils';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FontSize, RadiusSizes } from 'types';

import { useNavigation } from '@react-navigation/native';
import { images } from 'app/themes';

type Prop = {
  height: number;
};

export const EmptyScr: React.FC<Prop> = ({ height = 90}) => {
  const { colors } = useTheme();
  const { goBack, navigate } = useNavigation();
  const styles = StyleSheet.create({
    container: {
      height: heightPercentageToDP(height),
      width: widthPercentageToDP(100),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: heightPercentageToDP(5),
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
    pasalButton: {
      height: widthPercentageToDP(10),
      width: widthPercentageToDP(10),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: widthPercentageToDP(3),
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
       <Image
            source={images.global.empty}
            style={{ resizeMode: 'contain', width: widthPercentageToDP(90), height: heightPercentageToDP(20)}}
          />
          <Text type="bold" size={FontSize.caption} style={{marginVertical: 30}}>Tidak Ada Data Ditemukan</Text>
         
    </View>
  );
};
