import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from 'app/components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'app/utils';
import { HeaderAuth } from 'app/components/pages/auth';
import { Next, StartRekog, Success } from 'app/assets/icon';
import { AuthState, FontSize, RadiusSizes } from 'types';
import { useNavigation } from '@react-navigation/core';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { setDataRegister } from 'app/store/actions/register';
import { HeaderSmartTilang } from 'app/components/pages/smart-tilang';
import { setDataForgotPin } from 'app/store/actions/forgotpin';

const PinChange = () => {
  const { colors } = useTheme();
  const { navigate }: any = useNavigation();
  const [code, setCode] = useState<string>('');
  const dispatchAction = useDispatch();
  const { user_data}: AuthState= useSelector(({ auth }: any) => auth);

  const handleSubmit = () => {
    dispatchAction(setDataForgotPin({ pin: code, msisdn: user_data.msisdn}));
    navigate('PinChangeVerify');
  };

  return (
    <Layout>
     <HeaderSmartTilang title="Masukkan Pin Baru" />
      <ScrollView style={{ ...styles.container, backgroundColor: colors.light }}>
        <Text type="bold" size={FontSize.description} style={styles.text}>
          Masukkan nomor PIN Anda
        </Text>
        <OTPInputView
          style={styles.containerInput}
          pinCount={6}
          secureTextEntry
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => {
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
      </ScrollView>
      <Button
        disabled={code.length !== 6}
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
        <Next fill={colors.light} />
      </Button>
    </Layout>
  );
};

export default PinChange;

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
