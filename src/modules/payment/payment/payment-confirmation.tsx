import React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { LineChart } from 'react-native-chart-kit';

import { Layout, Text} from 'app/components';
import { useTheme } from 'app/utils';
import { FontSize, RadiusSizes } from 'types';
import { images } from 'app/themes';
import { Back, Back2, Filter, ChevronRight} from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';
import AccordionListItem from 'app/components/items/collapse'

const PaymentConfirmation = () => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();
  const { navigate }: any = useNavigation();
  const styles = StyleSheet.create({
    container: {
      height: heightPercentageToDP(Platform.OS === 'ios' ? 56 : 58),
      width: widthPercentageToDP(100),
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderBottomLeftRadius: RadiusSizes.extra_large,
      borderBottomRightRadius: RadiusSizes.extra_large,
      paddingVertical: 10
    },
    containerHeader: {
      height: heightPercentageToDP(12),
      width: widthPercentageToDP(100),
      // backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -50,
      borderBottomLeftRadius: RadiusSizes.extra_large,
      borderBottomRightRadius: RadiusSizes.extra_large,
    },
    backButton: {
      height: widthPercentageToDP(10),
      width: widthPercentageToDP(10),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: widthPercentageToDP(3),
    },
    row: {
      flexDirection: 'row',
      // width: widthPercentageToDP(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      height: widthPercentageToDP(6),
      alignSelf: 'center',
    },
  });
 

  const databank = [
    {
      id: 1,
      image: images.bank.bri,
      description: 'Tersedia pada pukul 00:30-21:30'
    },
    {
      id: 1,
      image: images.bank.bri,
      description: ''
    },
    {
      id: 1,
      image: images.bank.bri,
      description: ''
    },
   
  ]

 

  const _gotoDetailPelanggaran = () => {
    navigate('RincianPelanggaran');
  };
  return (
    <Layout>
    <View style={{backgroundColor: '#F0F3FA', height: heightPercentageToDP(90), paddingHorizontal: 20}}>
    <Image
          source={images.banner.bgpolri}
          style={{
            position: 'absolute',
            bottom: 0,
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(100),
            resizeMode: 'contain',
            zIndex: 0
          }}
        />
    <View style={{backgroundColor: '#fff', borderRadius: 15, padding: 20}}>
      <Text type="semibold" size={FontSize.caption} style={{marginVertical: 10}}>Bank Transfer </Text>
   
        <FlatList
            style={{marginHorizontal: 15, paddingTop: 10, }}
            data={databank}
            keyExtractor={(x, i) => i}
           showsVerticalScrollIndicator={false}
          
            onEndThreshold={0}
            renderItem={({ item, i }) =>
            
              <TouchableOpacity onPress={() => alert('lontong')} style={{marginVertical: 20, backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row', borderBottomWidth: 1, paddingBottom: 20, borderColor: 'rgba(46, 89, 229, 0.2)'}}>
                  <View style={{flex: 1, justifyContent: 'flex-start'}}>
                      <Image
                        source={item.image}
                      style={{height: 30, width: '100%', resizeMode: 'contain'}}
                      />
                    </View>
                  <View style={{flex: 4}}>
                    <Text type="light"  style={{marginHorizontal: 10, fontSize: 12, marginVertical: 5}}>{item.description}</Text>
                  </View>
                  <View>
                    <ChevronRight />
                    </View>
                   
                </View>
              </TouchableOpacity>
             
            }
          />
          </View>
      </View>
    </Layout>
  );
};

export default PaymentConfirmation;
