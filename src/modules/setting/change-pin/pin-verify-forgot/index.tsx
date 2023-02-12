import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Layout, showToast, Text } from 'app/components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'app/utils';
import { HeaderAuth } from 'app/components/pages/auth';
import { Next, StartRekog, Success } from 'app/assets/icon';
import { FontSize, ForgotPinState, RadiusSizes, RegisterState } from 'types';
import { useNavigation } from '@react-navigation/core';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { setDataRegister } from 'app/store/actions/register';
import { HeaderSmartTilang } from 'app/components/pages/smart-tilang';
import { storeKtpData, storeUserData } from 'app/store/actions/auth';

const PinVerifyChange = () => {
  const { colors } = useTheme();
  const { navigate }: any = useNavigation();
  const [codeVerify, setCodeVerify] = useState<string>('');
  const [loadingRegister, setLoadingRegister] = useState<any>(false);
  const { data_forgotpin }: ForgotPinState = useSelector(({ forgotpin }: any) => forgotpin);
  const dispatch = useDispatch();


  const LogOut = () => {
    const data = {
      id_user: '',
      device_id: '',
      msisdn: '',
      nik: '',
      is_petugas: 0,
      nrp: '',
      tgl_reg: '',
      img_face: '',
      login_status: false,
      token: '',
      token_exp: '',
    };

    const dataktp = {
      nik: '',
        nama: '',
        jk: '',
        tmp_lahir: '',
        tgl_lahir: '',
        agama: '',
        kawin: '',
        pendidikan: '',
        pekerjaan: '',
        propinsi: '',
        kabupaten: '',
        kecamatan: '',
        kel_desa: '',
        rt_rw: '',
      alamat: '',
      gol_darah: '',
      usia: '',
      last_update: '',
      foto: ''
    }
    
    dispatch(storeUserData(data));
    dispatch(storeKtpData(dataktp))
  }

  

  const handleSubmit = () => {
    setLoadingRegister(true)
    if(codeVerify === data_forgotpin.pin){

      var axios = require('axios');
   

    var config = {
      method: 'post',
      url: 'http://etle-incar.lasbontech.co.id//kyc/gantipin.php',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data_forgotpin
    };
    console.warn('data_forgot', data_forgotpin)
    axios(config)
    .then(function (response:any) {
      console.warn(response)
      if (response.data?.status == false) { 
        showToast({ type: 'error', message: response.data?.info });
        setLoadingRegister(false)
      }  else {
        showToast({ type: 'success', message: 'Berhasil Mengubah PIN, Silahkan Login Dengan menggunakan PIN Baru anda'});
        navigate('Main');
        
        setLoadingRegister(false)
        LogOut()
       }
      }).catch(err => {
        if(err?.response.status == 502){
          showToast({type: 'error', message: 'SKRIP tidak terhubung server. Mohon tunggu beberapa saat lagi'})
          setLoadingRegister(false)
        } else {
            showToast({ type: 'error', message: 'Terjadi Error Saat Melakukan Request' });
          setLoadingRegister(false)
        }
      })
    } else {
      showToast({ type: 'error', message: 'Pin Konfirmasi Salah / Tidak Sesuai' });
         setLoadingRegister(false)
    }
  };

  return (
    <Layout>
    <HeaderSmartTilang title="Masukkan Konfirmasi Pin Baru" />
      <ScrollView style={{ ...styles.container, backgroundColor: colors.light }}>
        <Text type="bold" size={FontSize.description} style={styles.text}>
          Ketik Ulang Nomor PIN Anda
        </Text>
        <OTPInputView
          style={styles.containerInput}
          pinCount={6}
          secureTextEntry
          code={codeVerify} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => {
            setCodeVerify(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={{
            ...styles.underlineStyleBase,
            backgroundColor: colors.grey,
            color: colors.primary,
          }}
          codeInputHighlightStyle={{ borderColor: colors.primary }}
        />
      </ScrollView>
      <Button
        disabled={codeVerify.length !== 6 || loadingRegister}
        onPress={handleSubmit}
        backgroundColor={colors.primary}
        style={styles.button}>
        <Text
          type="regular"
          color={colors.light}
          size={FontSize.description}
          style={styles.textButton}>
          Lanjutkan
        </Text>
        <Next fill={colors.light}  />
      </Button>
    </Layout>
  );
};

export default PinVerifyChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: heightPercentageToDP(5),
  },
  button: {
    marginBottom: widthPercentageToDP(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    marginRight: 10,
  },
  image: {
    marginVertical: heightPercentageToDP(10),
  },
  containerInput: {
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(20),
    alignSelf: 'center',
  },
  boxInput: {
    backgroundColor: 'red',
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
  text: {
    alignSelf: 'center',
  },
});
