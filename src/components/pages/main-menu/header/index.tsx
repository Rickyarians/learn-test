import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { Text } from 'app/components/items';
import { useTheme } from 'app/utils';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FontSize, RadiusSizes, AuthState } from 'types';
import { Wallet, Notif } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';
import { images } from 'app/themes';
import RBSheet from 'react-native-raw-bottom-sheet';
import { FeatureScr } from '../../upcoming';
import { RFValue } from 'react-native-responsive-fontsize';




export const HeaderHomeScr: React.FC = () => {
  // console.warn(data)
  
  const { ktp_data, user_data}: AuthState = useSelector(({ auth }: any) => auth);
  console.warn(ktp_data)
  const { colors } = useTheme();
  const { goBack, navigate } = useNavigation();
  const refModal: any = useRef();
  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP(100),
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderBottomLeftRadius: RadiusSizes.extra_large,
      borderBottomRightRadius: RadiusSizes.extra_large,
    },
    row: {
      marginTop: 50,
      flexDirection: 'row',
      width: widthPercentageToDP(80),
    },

    text: {
      height: widthPercentageToDP(6),
      alignSelf: 'center',
    },
    ic_driver: {
      resizeMode: 'contain',
      width: widthPercentageToDP(1),
      height: heightPercentageToDP(10),
    },
  });

  const _goToNotification = () => {
    navigate('Notif');
  };



  return (
    <View style={styles.container}>
     
      <View style={styles.row}>
        <View style={{ height: 60, width: 60, borderRadius: 100}}>
          <Image
            // source={{ ktp_data.foto ? uri: `${user_data.img_face}`}}
            source={ ktp_data.foto ? {uri:`data:image/jpeg;base64,${ktp_data.foto}`}: images.global.defaultpp}
            style={{ resizeMode: 'contain', height: 60, width: 60 }}
          />
        </View>
        <View style={{ flex: 3, marginHorizontal: 12, height: 80 }}>
          <View>
            <Text type="semibold" size={RFValue(5.5, 540)} style={{ color: '#fff' }}>
              Ricky Ariansyah
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text
                type="semibold"
                size={FontSize.description}
                style={{ color: '#fff', marginVertical: 5, width: widthPercentageToDP(25)}}>
                Rp. 100.000
              </Text>
              {/* <TouchableOpacity style={{ marginVertical: 10, marginHorizontal: 10 }} onPress={() => _goToPayment()}>
                <Wallet fill={colors.light} />
              </TouchableOpacity> */}
             
            </View>
          </View>
        </View>
        <View style={{ flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => _goToNotification()}>
            <Notif fill={colors.light} />
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        ref={refModal}
        closeOnDragDown
        height={heightPercentageToDP(65)}
        customStyles={{
          container: {
            borderTopRightRadius: RadiusSizes.large,
            borderTopLeftRadius: RadiusSizes.large,
          },
        }}>
          <FeatureScr height={65} />
      </RBSheet>
    </View>
  );
};
