import React from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, Image, Platform, FlatList, Linking } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'app/utils';
import { Layout, Text, TextInput } from 'app/components';

import { HeaderPasal } from 'app/components/pages/pasal';

import { FontSize, RadiusSizes } from 'types';
import { useState } from 'react';
import { images } from 'app/themes';
import {pasal} from 'app/locales/pasal'
import { PDFblue } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';
import { FeatureScr } from 'app/components/pages/upcoming';

const HalamanScr = () => {
  const { colors } = useTheme();
  const { goBack, navigate } = useNavigation();
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
      <HeaderPasal title="Menu Name" />
      <View style={{paddingHorizontal: 2, backgroundColor: '#F0F3FA', marginBottom: heightPercentageToDP(3)}}>
        <FeatureScr />
      </View>
      
    </Layout>
  );
};

export default HalamanScr
