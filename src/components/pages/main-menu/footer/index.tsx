import React, { useEffect, useRef, useState } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  Dimensions
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Button } from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'app/utils';
import { showToast, Text } from 'app/components/items';
import { AuthState, FontSize, RadiusSizes } from 'types';
import { Platform } from 'react-native';
import { Back2, SimIcon, SmartSim, UpdateFeature } from 'app/assets/icon';
import { images } from 'app/themes';
import { useNavigation } from '@react-navigation/native';
import { FeatureScr } from '../../upcoming';
import RBSheet from 'react-native-raw-bottom-sheet';
import remoteConfig from '@react-native-firebase/remote-config';
import deviceInfoModule from 'react-native-device-info';
import messaging, { firebase } from '@react-native-firebase/messaging';
import { useSelector } from 'react-redux';
import { storeKtpData, storeUserData } from 'app/store/actions/auth';
import { useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

type Prop = {
  isLoading?: boolean;
  onPress?: () => void;
};

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export const FooterHomeScr: React.FC<Prop> = ({ isLoading, onPress }) => {
  const { colors } = useTheme();
  const { navigate }: any = useNavigation();
  const refModal: any = useRef();
  const refModalUpdate: any = useRef();
  const [versiTerbaru, setVersiTerbaru] = useState<any>('')
  const [linkUpdate, setLinkUpdate] = useState<any>('')
  const { user_data }: AuthState = useSelector(({ auth }: any) => auth);
  const [isModalKonfirmasiLogOut, setIsModalKonfirmasiLogOut] = useState<boolean>(false);
  const dispatch = useDispatch();

    useEffect(() => {
      cekTokenExp()
      fetchRemoteData()
      requestUserPermission()
      messagingInit()
      // messageHandlerBackground()
      console.warn('height', windowHeight)
  }, []);


  const messagingInit = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.warn(remoteMessage);
      Toast.show({
        type: 'success',
        text1: 'Anda Mendapatkan Notifikasi Baru',
      });
    });

    return unsubscribe;
  }

  // const messageHandlerBackground = () => {
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.warn('Message handled in the background!', remoteMessage);
  //   });
    
  // }


  const toggleModalKonfirmasiLogOut = () => {
    setIsModalKonfirmasiLogOut(!isModalKonfirmasiLogOut)
  }

const goTolink = (url) => {
  if (url !== null && url !== '' && url !== undefined) {
      Linking.canOpenURL(url).then(supported => {
        // console.warn(supported)
          if (!supported) {
              console.log('Can\'t handle url: ' + url);
          } else {
              LogOut()
              return Linking.openURL(url);
          }
      }).catch(err => console.error('An error occurred', err));
  } else {
      showToast({ type: 'error', message: 'Server sedang dalam masa maintenance' });
  } 
}


const fetchRemoteData = async () => {
  try {
    // await remoteConfig().setDefaults({test: '1.1'}); // setting default value
    await remoteConfig().fetch(1); // 10 seconds cache
    const activated = await remoteConfig().fetchAndActivate(); //can read remote data if true
    // console.warn(activated)
    if (activated) {
      const values = await remoteConfig().getAll();//returns all values set in remote
      // console.warn(values.KEY_CURRENT_VERSION);
      let data = {};
      Object.entries(values).forEach((key, value) => {
        // console.warn(key[1]._value);
        data[key[0]] = key[1]._value
        // Do something with data
      });

      if (
        data.KEY_UPDATE_REQUIRED === 'true' && 
        deviceInfoModule.getVersion() !== data.KEY_CURRENT_VERSION 
      ) {
        if (Platform.OS === "ios") {
          setVersiTerbaru(data.KEY_CURRENT_VERSION)
          setLinkUpdate(data.KEY_UPDATE_URL_IOS)
          refModalUpdate.current.open();
        } else {
          setLinkUpdate(data.KEY_UPDATE_URL_ANDROID)
          setVersiTerbaru(data.KEY_CURRENT_VERSION)
          refModalUpdate.current.open();
        }
      }

    } else {
      const parameters = remoteConfig().getAll();
      console.warn(parameters.KEY_CURRENT_VERSION)
      
      let data = {};
      // Retrieve values
      Object.entries(parameters).forEach((key, value) => {
        // console.warn(key[1]._value);
        data[key[0]] = key[1]._value
        // Do something with data
      });

      console.warn(typeof data.KEY_UPDATE_REQUIRED)

      if (
        data.KEY_UPDATE_REQUIRED === 'true' && 
        deviceInfoModule.getVersion() !== data.KEY_CURRENT_VERSION 
      ) {
        if (Platform.OS === "ios") {
          setVersiTerbaru(data.KEY_CURRENT_VERSION)
          setLinkUpdate(data.KEY_UPDATE_URL_IOS)
          refModalUpdate.current.open();
        } else {
          setLinkUpdate(data.KEY_UPDATE_URL_ANDROID)
          setVersiTerbaru(data.KEY_CURRENT_VERSION)
          refModalUpdate.current.open();
        }
      }
    }
  } catch (error) {
    console.warn(error);
  }
};

    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        // console.warn('Authorization status:', authStatus);
        firebase.messaging().getToken().then(token => {
          // console.warn("LOG: ", token);
          updateFCMtoken(token)
        })
      }
    }

    const cekTokenExp = async () => {
    
      var axios = require('axios');
      var data = JSON.stringify({
        "menu": "all"
      });
  
      var config = {
        method: 'post',
        url: 'http://etleincar.lasbontech.co.id/api/skrip.php',
        headers: { 
          'token': user_data.token,
          'Content-Type': 'application/json'
        },
        data : data
      };
  
      axios(config)
      .then(function (response: any) {
        // console.warn('cek token',response);
        if(response.data?.status == false ){
              const token = response.data.info.toLowerCase();
              const is_token = token.includes('token') 
              if(is_token){
                toggleModalKonfirmasiLogOut()
              }
        }
        // setListPelanggaranUser(response.data.result)
        // hitungTotalPoint(response.data.result)
        // setLoading(false)
      })
      .catch(function (error: any) {
        // console.log(error);
        // setLoading(false)
        if(error?.response.status == 502){
          showToast({type: 'error', message: 'SKRIP tidak terhubung server. Mohon tunggu beberapa saat lagi'})
        }
      });
  }




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
    toggleModalKonfirmasiLogOut()
    dispatch(storeUserData(data));
    dispatch(storeKtpData(dataktp))
  }

  const updateFCMtoken = (fcm_token: any) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "fcm_token": fcm_token
    });

    var config = {
      method: 'post',
      url: 'http://etle-incar.lasbontech.co.id/kyc/fcm.php',
      headers: { 
        'token': user_data.token, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response: any) {
      // console.warn('fcm update', response.data)
    })
    .catch(function (error: any) {
      console.warn(error);
      if(error?.response.status == 502){
        showToast({type: 'error', message: 'SKRIP tidak terhubung server. Mohon tunggu beberapa saat lagi'})
      }
    });

  }





  const styles = StyleSheet.create({
    footer: {
      backgroundColor: colors.light,
      position: 'absolute',
      bottom: windowHeight > 812 && windowHeight < 850 ? -heightPercentageToDP(6) : windowHeight > 850 && windowHeight < 870 ? -heightPercentageToDP(11) : windowHeight < 813 ? -heightPercentageToDP(15) :-heightPercentageToDP(10),
      height: heightPercentageToDP(80),
      width: widthPercentageToDP(100),
      borderTopLeftRadius: RadiusSizes.extra_large,
      borderTopRightRadius: RadiusSizes.extra_large,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex: 0,
      // justifyContent: 'center',
      marginTop: 30
    },

    shadow: {
      height: heightPercentageToDP(19),
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
    cardMenu: {
      backgroundColor: colors.light,
      marginTop: heightPercentageToDP(100) < 650 ? -40 : -80,
      width: widthPercentageToDP(90),
      borderRadius: 20,
      paddingTop: 10,
      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      height: windowHeight > 812 ? heightPercentageToDP(28) : heightPercentageToDP(24),
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    cardWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: widthPercentageToDP(100),
      paddingHorizontal: 20,
    },
    cardBanner: {
      height: heightPercentageToDP(7),
      width: widthPercentageToDP(100),
      borderRadius: RadiusSizes.medium,
    },
    cardBannerWrapper: {
      width: widthPercentageToDP(100),
      resizeMode: 'contain'
    },
    cardMenuItem: {
      height: heightPercentageToDP(7),
      width: widthPercentageToDP(100),
      borderRadius: RadiusSizes.medium,
      // backgroundColor: 'red'
    },
  });

  const _goSmartTilang = () => {
    navigate('DataTilang');
  };

  const onUpdateFeature = () => {
    refModal.current.open();
  };

  return (
    <View style={{ flex: 1 }}>
        <View style={{flex: 1}}>
        <TouchableOpacity style={styles.cardMenuItem}>
        <Image
          source={images.banner.atas}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: heightPercentageToDP(15),
            width: '100%',
            resizeMode: 'contain',
            marginTop: -25,
          }}
        />
      </TouchableOpacity>
        </View>
      <View style={styles.footer}>
      <Image
          source={images.banner.bgpolri}
          style={{
            position: 'absolute',
            width: '100%',
            height: heightPercentageToDP(40),
            top: heightPercentageToDP(10),
            resizeMode: 'contain',
          }}
        />
        <View style={styles.cardWrapper}>
          <View style={styles.cardMenu}>
           
            <TouchableOpacity onPress={() => onUpdateFeature()}>
              <View
                style={{
                  backgroundColor: '#D9F2DA',
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  paddingVertical: 8,
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                }}>
                <View style={{ flex: 0.5, marginRight: 15 }}>
                  <SimIcon />
                </View>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                  <Text type="regular" style={{ color: '#318C34', fontSize: RFValue(9, 540) }}>
                    Kawasan Tertib Lalulintas
                  </Text>
                </View>
                <View style={{}}>
                 <TouchableOpacity onPress={() => onUpdateFeature()}>
                 <View
                    style={{
                      backgroundColor: '#318C34',
                      padding: 2,
                      borderRadius: 6,
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginVertical: 'auto',
                    }}>
                    <Back2 fill={colors.light} style={{ transform: [{ rotate: '180deg' }] }} />
                  </View>
                 </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
           

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: windowHeight > 812 ? 20 : 10 }}>
                <Text style={{ textAlign: 'center', color: 'rgba(46, 89, 229, 0.2)', height: 30 }}>
                  - - - - - - -
                </Text>
              <View style={{justifyContent: 'center' }}>
                <Text
                  type="semibold"
                  size={RFValue(4.5, 540)}
                  style={{ color: '#15233D', textAlign: 'center' }}>
                  Delivery Tracking
                </Text>
              </View>
                <Text style={{ textAlign: 'center', color: 'rgba(46, 89, 229, 0.2)', height: 30 }}>
                  - - - - - - -
                </Text>
            </View>
            

            <View style={{ flexDirection: 'row', marginVertical: 5, paddingHorizontal: 15, width: '100%'}}>
              <View style={{ flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={() => onUpdateFeature()}>
                  <Image
                    source={images.menuicon.sim}
                    style={{ height: 46, resizeMode: 'contain' }}
                  />
                  <Text
                    type="semibold"
                    style={{
                      color: '#15233D',
                      textAlign: 'center',
                      marginVertical: 5,
                      fontSize: RFValue(8,540),
                    }}>
                    SIM
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onUpdateFeature()}>
                  <Image
                    source={images.menuicon.ranmor}
                    style={{ height: 46, resizeMode: 'contain' }}
                  />
                  <Text
                    type="semibold"
                    size={FontSize.description}
                    style={{
                      color: '#15233D',
                      textAlign: 'center',
                      marginVertical: 5,
                      fontSize: RFValue(8,540),
                    }}>
                    Ranmor
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onUpdateFeature()}>
                  <Image
                    source={images.menuicon.tilang}
                    style={{ height: 46, resizeMode: 'contain' }}
                  />
                  <Text
                    type="semibold"
                    style={{
                      color: '#15233D',
                      textAlign: 'center',
                      marginVertical: 5,
                      fontSize: RFValue(8,540),
                    }}>
                    Tilang
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onUpdateFeature()}>
                  <Image
                    source={images.menuicon.laka}
                    style={{ height: 46, resizeMode: 'contain' }}
                  />
                  <Text
                    type="semibold"
                    style={{
                      color: '#15233D',
                      textAlign: 'center',
                      marginVertical: 5,
                      fontSize: RFValue(8,540),
                    }}>
                    Laka
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => onUpdateFeature()}> 
                <Image
                  source={images.mainmenu.smartsimnew}
                  style={{ height: 120, width: '100%', resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => onUpdateFeature()}>
                  <Image
                    source={images.mainmenu.smartranmor}
                    style={{ height: 120, width: '100%', resizeMode: 'contain' }}
                  />
                </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={_goSmartTilang}>
                <Image
                  source={images.mainmenu.smarttilangnew}
                  style={{ height: 120, width: '100%', resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => onUpdateFeature()}>
                <Image
                  source={images.mainmenu.smartlaka}
                  style={{ height: 120, width: '100%', resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.cardBannerWrapper}>
            <TouchableOpacity style={styles.cardBanner}>
              <Image source={images.banner.bawah} style={{ height: '100%', width: '100%' }} />
            </TouchableOpacity>
          </View> */}
 <View style={styles.cardBannerWrapper}>
            <TouchableOpacity style={styles.cardMenuItem}>
        <Image
          source={images.banner.bawah}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: heightPercentageToDP(15),
            width: '100%',
            resizeMode: 'contain',
            marginTop: -25,
          }}
        />
      </TouchableOpacity>
      </View>
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
      <RBSheet
        ref={refModalUpdate}
        closeOnDragDown={false}
        closeOnPressMask={false}
        height={heightPercentageToDP(55)}
        customStyles={{
          container: {
            borderTopRightRadius: RadiusSizes.large,
            borderTopLeftRadius: RadiusSizes.large,
            paddingHorizontal: 20,
            paddingVertical: 20
          },
        }}>
          <View style={{justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
              <View> 
             </View>
             <View> 
             <UpdateFeature/>
             </View>
             <View>
             </View>
          </View>
         
          <View style={{flex: 1, alignContent: 'center'}}>
          <Text type="bold" size={RFValue(6, 540)} style={{textAlign: 'center', marginBottom: 10}}>Update Versi {versiTerbaru}</Text>
              <Text type="regular" size={RFValue(5, 540)} style={{textAlign: 'center'}}>Versi terbaru aplikasi SKRIP sudah tersedia. demi meningkatkan kenyamanan dalam menggunakan aplikasi, harap update aplikasi SKRIP !</Text>
              <TouchableOpacity style={{backgroundColor: colors.primary, paddingVertical: 14, paddingHorizontal: 10, borderRadius: 20, marginVertical: 20}} onPress={() => goTolink(linkUpdate)}>
                <Text type="light" color={colors.light} style={{textAlign: 'center', fontSize: 18}}>Update Aplikasi</Text>
              </TouchableOpacity>
          </View>
      </RBSheet>

      <Modal isVisible={isModalKonfirmasiLogOut}>
        <View style={{ backgroundColor: '#fff',  borderRadius: 14, paddingVertical: 10, paddingHorizontal: 15}}>
            <Text type="semibold" size={FontSize.caption } style={{textAlign: 'center', marginVertical: 10}}>Session Anda Telah Habis</Text>
            <Text type="semibold" size={FontSize.description -1} style={{textAlign: 'center', marginVertical: 10}}> Sesssion anda telah habis, untuk kembali menggunakan aplikasi silahkan login kembali</Text>
           
           

           <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{flex: 1, paddingHorizontal: 20}}>
              <TouchableOpacity style={{backgroundColor: colors.primary, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 18}} onPress={() => LogOut()}>
                <Text type="semibold" size={FontSize.description} style={{textAlign: 'center', color: '#fff'}}>
                  Keluar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        
        </View>
      </Modal>
    </View>
  );
};
