import React from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, Image, Platform } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'app/utils';
import { Layout, Text, TextInput } from 'app/components';

import { FooterHomeNewScr, FooterHomeScr, HeaderHomeScr } from 'app/components/pages/main-menu';


import { AuthState, FontSize, RadiusSizes } from 'types';
import { useState } from 'react';
import { images } from 'app/themes';
import { useSelector } from 'react-redux';
import { FeatureScr } from 'app/components/pages/upcoming';

const HomePageScr = ({route}) => {
  const { colors } = useTheme();
  const params = route?.params
  const { user_data }: AuthState = useSelector(({ auth }: any) => auth);
 

  const styles = StyleSheet.create({
    cardMenu: {
      height: heightPercentageToDP(7),
      width: widthPercentageToDP(100),
      borderRadius: RadiusSizes.medium,
    },
    cardWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      width: widthPercentageToDP(100),
      paddingHorizontal: 20,
      marginBottom: heightPercentageToDP(Platform.OS !== 'ios' ? 18 : 14),
      marginTop: heightPercentageToDP(2),
    },
  });
  return (
    <Layout>
      <HeaderHomeScr />
      <FeatureScr />
    </Layout>
  );
};

export default HomePageScr;
