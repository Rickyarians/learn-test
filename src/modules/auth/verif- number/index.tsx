import { useNavigation } from '@react-navigation/core';
import { HeaderImage, IndonesiaFlag, Next, UpdateFeature } from 'app/assets/icon';
import { Button, Layout, showToast, showToastConnection, Text } from 'app/components';
import { images } from 'app/themes';
import { request, useTheme } from 'app/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Image, Linking, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { BaseURL, Endpoint, FontSize, RadiusSizes } from 'types';
import auth from '@react-native-firebase/auth'
import remoteConfig from '@react-native-firebase/remote-config';
import { sendErrorToSentry } from 'app/utils/sentry';
import RBSheet from 'react-native-raw-bottom-sheet';
import deviceInfoModule from 'react-native-device-info';
import { storeKtpData, storeUserData } from 'app/store/actions/auth';
import { useDispatch } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";

const VerifNumber = () => {
  const { colors } = useTheme();
  const [phone, setPhone] = useState<string>('');
  const { navigate }: any = useNavigation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [versiTerbaru, setVersiTerbaru] = useState<any>('')
  const [linkUpdate, setLinkUpdate] = useState<any>('')
  const refModalUpdate: any = useRef();
  const dispatch = useDispatch();


  const handleSubmit = () => {
    if (phone.length === 0) {
      showToast({ type: 'error', message: 'Form nomor ponsel wajib diisi' });
    } else {
      // showToast({ type: 'error', message: phone});
      _checkRegisNew();
    }
  };

  const _checkRegisNew = () => {
    if(phone == '823123456789') {
      navigate('VerifPin', { phone_number: phone });
    }
   }


  useEffect(() => {
    NetInfo.addEventListener(state => {
      if(state.isConnected != true) {
        showToast({type: 'error', message: 'Anda Sedang dalam mode offline. Pastikan koneksi anda tersambung dengan internet'})
      }
    
    });
    

}, []);

  return (
    <Layout barStyle="dark-content">
      <View style={styles.content}>
        <View style={styles.imageBg}>
          <HeaderImage />
        </View>
        <View style={styles.containerContent}>
          <View style={styles.image}/>
          <View>
            <Text type="semibold" style={[styles.label]} size={FontSize.description}>
              Masukkan nomor ponsel Anda
            </Text>
            <View
              style={[
                styles.containerInput,
                {
                  backgroundColor: colors.grey,
                },
              ]}>
              <IndonesiaFlag />
              <Text
                type="bold"
                color={'#809AEF'}
                style={[styles.labelInput]}
                size={FontSize.description}>
                +62{' '}
              </Text>
              <View style={styles.line} />
              <TextInput
                value={phone}
                onChangeText={(text: string) => {
                  // console.warn(text)
                  // showToast({type: 'success', 'message': text})
                 
                  while(text.charAt(0) === '0')
                  {
                  text = text.substring(1);
                  }
                  setPhone(text)
                  // if (text.length === 1) {
                  //     while(text.charAt(0) === '0')
                  //     {
                  //     text = text.substring(1);
                  //     setPhone(text)
                  //     }
                    
                  //   if (text !== '0') {
                  //     setPhone(text);
                  //   }
                  // } else {
                  //   setPhone(text);
                  // }
                }}
                textContentType="oneTimeCode"
                keyboardType="numeric"
                maxLength={13}
                style={[styles.input, { backgroundColor: colors.grey }]}
                placeholder="Nomor ponsel ex: 821 xxx"
              />
            </View>
          </View>
          <Button
            disabled={isLoading}
            onPress={handleSubmit}
            style={[
              styles.button,
              { backgroundColor: isLoading ? colors.shadow_primary : colors.primary },
            ]}>
            <Text
              style={styles.textButton}
              type="regular"
              size={FontSize.caption - 1}
              color={colors.light}>
              Lanjutkan
            </Text>
            <Next fill={colors.light} />
          </Button>
        </View>
      </View>

     
    </Layout>
  );
};

export default VerifNumber;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    height: heightPercentageToDP(Platform.OS === 'ios' ? 64 : 70),
    borderBottomLeftRadius: RadiusSizes.extra_large,
    borderBottomRightRadius: RadiusSizes.extra_large,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: widthPercentageToDP(5),
  },
  imageBg: { position: 'absolute', top: 0 },
  image: {
    resizeMode: 'contain',
    width: widthPercentageToDP(50),
    height: heightPercentageToDP(20),
    backgroundColor: '#D2DBF9',
  },
  label: { marginBottom: heightPercentageToDP(1.5) },
  labelInput: { marginBottom: heightPercentageToDP(0.2), marginLeft: 7 },
  input: {
    borderRadius: RadiusSizes.medium,
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(70),
    padding: 15,
    overflow: 'hidden',
    fontFamily: Platform.OS !== 'ios' ? 'Nunito-Semibold' : 'Nunito-Regular',
    fontSize: RFValue(Platform.OS !== 'ios' ? 9 : 7, widthPercentageToDP(100)),
  },
  containerInput: {
    height: heightPercentageToDP(7),
    width: widthPercentageToDP(90),
    borderRadius: RadiusSizes.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: widthPercentageToDP(5),
  },
  line: {
    height: 15,
    width: 1,
    backgroundColor: '#D2DBF9',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    marginBottom: 5,
    marginRight: 10,
  },
  containerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heightPercentageToDP(50),
  },
});
