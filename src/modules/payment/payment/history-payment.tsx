import React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { LineChart } from 'react-native-chart-kit';

import { Layout, Text } from 'app/components';
import { useTheme } from 'app/utils';
import { FontSize, RadiusSizes } from 'types';
import { images } from 'app/themes';
import { Back, Back2, Filter } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';

const HistoryPayment = () => {
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
 

  const datapelanggaran = [
    {
      point: 3,
      type: 'Pelanggaran ringan',
      title: 'Pelanggaran Lalu lintas',
      waktu: '18 : 30, 24 Feb 2020',
      sidang: '24 Feb 2020',
      denda: 'Rp 500.000',
      statusBayar: 'Belum bayar',

    },  
  ]

 

  const _gotoDetailPelanggaran = () => {
    navigate('RincianPelanggaran');
  };
  return (
    <Layout>
     <View style={{backgroundColor: '#F0F3FA', height: heightPercentageToDP(90)}}>
    <Image
          source={images.banner.bgpolri}
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            height: heightPercentageToDP(90),
            resizeMode: 'contain',
            zIndex: 0
          }}
        />
        <FlatList
            style={{marginHorizontal: 15, paddingTop: 10, }}
            data={datapelanggaran}
            keyExtractor={(x, i) => i}
           showsVerticalScrollIndicator={false}
          
            onEndThreshold={0}
            renderItem={({ item, i }) =>
              <TouchableOpacity style={{backgroundColor: '#fff',zIndex:99, borderRadius: 10, marginVertical: 5, paddingHorizontal: 15, paddingVertical: 15, height: 200}}>
                <View >
                <View style={styles.row}>
                    <View style={{flex: 2}}>
                      <Text type="regular" style={{color: '#bdbdbd', marginVertical: 2.5, fontSize: 14}}>18 : 30, 24 Feb 2020</Text>
                    </View>
                    <View style={{flex: 2}}>
                    <View style={{backgroundColor: '#318C34', width: widthPercentageToDP(30), marginVertical: 10, borderRadius: 6, paddingVertical: 4, paddingHorizontal: 5}}>
                        <Text type="regular" style={{color: '#fff', textAlign: 'center', fontSize: 12}}>Berhasil</Text>
                      </View>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}> 
                        <View style={{height: 20, width: 20, backgroundColor: '#2E59E5', borderRadius: 50, marginTop: -20}}>
                        </View>
                    </View>
                </View>

                
                  <Text type="bold" size={FontSize.caption} style={{marginVertical: 20}}>Pembayaran Tilang #123232</Text>
                  
                  <Text type="light"  style={{lineHeight: 20, fontSize: 12}}>Pembayaran Anda telah berhasil</Text>
               
              
              </View>
              </TouchableOpacity>
            }
          />
          </View>
    </Layout>
  );
};

export default HistoryPayment
