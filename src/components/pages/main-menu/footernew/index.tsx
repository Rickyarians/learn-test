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
import InAppReview from 'react-native-in-app-review';

type Prop = {
  isLoading?: boolean;
  onPress?: () => void;
};

// const windowWidth = Dimensions.get('screen').width;
// const windowHeight = Dimensions.get('screen').height;

export const FooterHomeNewScr: React.FC<Prop> = ({ isLoading, onPress, route}) => {
  const { colors } = useTheme();
  const { navigate }: any = useNavigation();
  const refModal: any = useRef();
  const refModalUpdate: any = useRef();
  const [versiTerbaru, setVersiTerbaru] = useState<any>('')
  const [linkUpdate, setLinkUpdate] = useState<any>('')
  const { user_data }: AuthState = useSelector(({ auth }: any) => auth);
  const [isModalKonfirmasiLogOut, setIsModalKonfirmasiLogOut] = useState<boolean>(false);
  const dispatch = useDispatch();
  const params = route

    useEffect(() => {
    console.warn('params', user_data.rating);
      console.warn('in app review', InAppReview.isAvailable())

      if(InAppReview && user_data?.rating) {
        InAppReview.RequestInAppReview()
  .then((hasFlowFinishedSuccessfully) => {
    // when return true in android it means user finished or close review flow
    console.log('InAppReview in android', hasFlowFinishedSuccessfully);

    // when return true in ios it means review flow lanuched to user.
    console.log(
      'InAppReview in ios has launched successfully',
      hasFlowFinishedSuccessfully,
    );

    // 1- you have option to do something ex: (navigate Home page) (in android).
    // 2- you have option to do something,
    // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

    // 3- another option:
    if (hasFlowFinishedSuccessfully) {
    console.warn('review', hasFlowFinishedSuccessfully)
    let data = user_data
    data = {...user_data, rating: false}
    dispatch(storeUserData(data))
      // do something for ios
      // do something for android
    }

    // for android:
    // The flow has finished. The API does not indicate whether the user
    // reviewed or not, or even whether the review dialog was shown. Thus, no
    // matter the result, we continue our app flow.

    // for ios
    // the flow lanuched successfully, The API does not indicate whether the user
    // reviewed or not, or he/she closed flow yet as android, Thus, no
    // matter the result, we continue our app flow.
  })
  .catch((error) => {
    //we continue our app flow.
    // we have some error could happen while lanuching InAppReview,
    // Check table for errors and code number that can return in catch.
    console.warn(error);
  });
      }
      fetchRemoteData()
      requestUserPermission()
     
      messagingInit()
      // delaytime(5000)
      checkexpired()
      // messageHandlerBackground()
      // console.warn('height', windowHeight)
  }, []);

  const delaytime = (ms) => {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );  
  }

  const checkexpired = async() => {
    await delaytime(5000)
    cekTokenExp()
  }


  const messagingInit = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.warn(remoteMessage);
      if(remoteMessage) {
        Toast.show({
          type: 'success',
          text1: 'Anda Mendapatkan Notifikasi Baru',
        });
      }
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
      if(user_data.token != '') {
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
      // height: heightPercentageToDP(70),
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
      marginTop: 120,
      flex: 6,
      minHeight: heightPercentageToDP(70)
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
      // height: windowHeight > 812 ? heightPercentageToDP(28) : heightPercentageToDP(24),
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
      resizeMode: 'contain',
      marginBottom: heightPercentageToDP(15)
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
    <ScrollView style={{flex: 1, flexDirection: 'column', backgroundColor: '#F9FBFC'}}>
        <View style={{ flex: 1, flexDirection: 'column'}}>
          
        </View>
    </ScrollView>
  );
};
