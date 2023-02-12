import React from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, Image, Platform, FlatList, Linking } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'app/utils';
import { Layout, Text, TextInput } from 'app/components';

import { HeaderPasal } from 'app/components/pages/pasal';
import { HeaderSmartTilang } from 'app/components/pages/smart-tilang';
import { FeatureScr } from 'app/components/pages/upcoming';



const DokumenKendaraanScr= () => {
 
  return (
    <Layout>
      <HeaderSmartTilang title="Dokumen Kepemilikan Kendaraan" />
      <FeatureScr />
    </Layout>
  );
};

export default DokumenKendaraanScr
