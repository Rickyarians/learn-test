import React from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, Image, Platform, FlatList, Linking } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'app/utils';
import { Layout, Text, TextInput } from 'app/components';

import { HeaderPasal } from 'app/components/pages/pasal';
import { FeatureScr } from 'app/components/pages/upcoming';

import { FontSize, RadiusSizes } from 'types';
import { useState } from 'react';
import { images } from 'app/themes';
import {pasal} from 'app/locales/pasal'
import { PDFblue } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';


const DumasScr = () => {
 
  return (
    <Layout>
      <HeaderPasal title="Menu Name" />
      <FeatureScr />
    </Layout>
  );
};

export default DumasScr
