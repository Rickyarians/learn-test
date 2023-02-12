import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { Button, Layout, showToast, Text } from 'app/components';
import { useTheme, request } from 'app/utils';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FontSize, RadiusSizes } from 'types';
import { useNavigation } from '@react-navigation/native';
import { menusetting } from 'app/locales/menu';
import { ChevronRight, IconLogOut, LogOut, Next, PDFblue } from 'app/assets/icon';
import { color } from 'react-native-reanimated';
import { persistor } from 'app/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { storeKtpData, storeUserData } from 'app/store/actions/auth';
import Modal from 'react-native-modal'

export const FooterSetting: React.FC<prop> = () => {
  const { colors } = useTheme();
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();
  const [isModalLogOutVisible, setIsModalLogOutVisible] = useState<boolean>(false)

  const styles = StyleSheet.create({
    container: {
      height: heightPercentageToDP(80),
      width: widthPercentageToDP(100),
      paddingBottom: heightPercentageToDP(10),
      borderBottomLeftRadius: RadiusSizes.extra_large,
      borderBottomRightRadius: RadiusSizes.extra_large,
      justifyContent: 'center',
      alignItems: 'flex-end',
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
  });


  const toggleModalLogOut = () => {
    setIsModalLogOutVisible(!isModalLogOutVisible)
  }


  const _logOut = () => {
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
    toggleModalLogOut()
    dispatch(storeUserData(data));
  }

  return (
    <View style={styles.container}>
       <Button
        onPress={_logOut}
        style={[styles.button, { backgroundColor: colors.danger }]}>
        <Text
          style={styles.textButton}
          type="regular"
          size={FontSize.caption - 1}
          color={colors.light}>
          Logout
        </Text>
        <Next fill={colors.light} />
      </Button>
    </View>
  );
};
