import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Layout, showToast, Text } from 'app/components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { request, useTheme } from 'app/utils';
import { Success } from 'app/assets/icon';
import { BaseURL, Endpoint, FontSize, RegisterState } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

const SplashScreen = () => {
  const { colors } = useTheme();
  const { navigate, reset}: any = useNavigation();

  const delaytime = (ms: number) => {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );  
  }
  const fetchData = async () => {
    await delaytime(3000)
    navigate('VerifNumber');
  };


  useEffect(() => {
      fetchData()
  }, []);

  const _goToHalamanAwal = () => {
    reset({
      index: 0,
      routes: [{name: 'VerifNumber'}],
    });
  }
  

  return (
    <Layout>
      <View style={{ ...styles.container, backgroundColor: colors.light }}>
        <Text
          type="regular"
          size={FontSize.description - 1}
          style={{ width: widthPercentageToDP(80), marginTop: heightPercentageToDP(2) }}
          align="center">
         Splash Screen
        </Text>
      </View>
    </Layout>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
