import { useNavigation } from '@react-navigation/core';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { CopasIcon, HeaderImage, IndonesiaFlag, Next } from 'app/assets/icon';
import { Button, Layout, showToast, Text } from 'app/components';
import { storeKtpData, storeUserData } from 'app/store/actions/auth';
import { images } from 'app/themes';
import { request, useTheme } from 'app/utils';
import { sendErrorToSentry } from 'app/utils/sentry';
import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { BaseURL, Endpoint, FontSize, RadiusSizes } from 'types';

type PropsRoute = {
  route: {
    params: {
      phone_number: string;
    };
  };
};

const VerifPIN: React.FC<PropsRoute> = ({ route }) => {
  const { colors } = useTheme();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');
  const params = route.params;
  const dispatch = useDispatch();
  const {navigate}: any = useNavigation();

  const handleSubmit = () => {
    _checkRegisNew();
  };

  const _checkRegisNew = () => {
    setLoading(true);
    console.warn(params.phone_number)
    console.warn(code)
    if(params.phone_number == '823123456789' && code == '123456') {
        dispatch(storeUserData({
          id_user: '123',
          device_id: 'device123',
          msisdn: '82310569056',
          nik: '12345678910',
          is_petugas: 0,
          nrp: '',
          tgl_reg: '',
          img_face: '',
          login_status: true,
          token: 'token123',
          token_exp: '',
          rating: false
      }))
        showToast({type: 'success', message: 'Berhasil Login'})
        setLoading(false);
      } else {
        setLoading(false);
       
        showToast({type: 'error', message: 'Nomor Telepon Atau Pin Yang anda masukkan salah'})
        // sendErrorToSentry('VerifPIN', 'LoginHitAPI', 'checkLogin', params.phone_number, 'Gagal Login')
      }
    }

  useEffect(() => {
    if(code.length == 6){
      handleSubmit()
    }
     
 }, [code]);

 

  return (
    <Layout barStyle="dark-content">
      <View style={styles.content}>
        <View style={styles.imageBg}>
          <HeaderImage />
        </View>
        <View style={styles.containerContent}>
          {/* <Image source={images.global.logo} style={styles.image} /> */}
          <View style={styles.image} />
          <Text type="regular" size={FontSize.description}>
            Masukkan kode{' '}
            <Text type="bold" size={FontSize.description}>
              PIN
            </Text>{' '}
            Anda
          </Text>
          <OTPInputView
            style={styles.containerInput}
            pinCount={6}
            secureTextEntry
            code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={(code: any) => {
              setCode(code);
            }}
            autoFocusOnLoad
            codeInputFieldStyle={{
              ...styles.underlineStyleBase,
              backgroundColor: colors.grey,
              color: colors.primary,
            }}
            codeInputHighlightStyle={{ borderColor: colors.primary }}
          />
          <Button
            disabled={code.length !== 6 || isLoading}
            onPress={handleSubmit}
            style={[
              styles.button,
              {
                backgroundColor:
                  code.length !== 6 || isLoading ? colors.shadow_primary : colors.primary,
              },
            ]}>
              {isLoading &&  <ActivityIndicator size="small" color="#fff" style={{marginRight: 2}}/>}
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

export default VerifPIN;

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
    width: widthPercentageToDP(80),
    borderRadius: RadiusSizes.medium,
    flexDirection: 'row',
    alignItems: 'center',
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
  underlineStyleBase: {
    width: widthPercentageToDP(10),
    height: widthPercentageToDP(10),
    borderRadius: RadiusSizes.large,
    fontFamily: 'Nunito-ExtraBold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
