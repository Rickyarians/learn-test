import React from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, Image, Platform } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'app/utils';
import { Layout, Text, TextInput } from 'app/components';

import { HeaderHomeScr } from 'app/components/pages/main-menu';


import { AuthState, FontSize, RadiusSizes } from 'types';
import { useState } from 'react';
import { images } from 'app/themes';
import { useSelector } from 'react-redux';
import { FeatureScr } from 'app/components/pages/upcoming';

const HomePageScr = ({}) : any=> {

  return (
    <Layout>
      <HeaderHomeScr />
      <FeatureScr height={90}/>
    </Layout>
  );
};

export default HomePageScr;
