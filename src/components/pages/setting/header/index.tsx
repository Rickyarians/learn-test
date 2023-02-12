import React, { useState, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { showToast, Text } from 'app/components/items';
import { useTheme, request} from 'app/utils';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { AuthState, BaseURL, Endpoint, FontSize, RadiusSizes } from 'types';
import { Back } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';
import { Wallet, Notif } from 'app/assets/icon';
import ProgressCircle from 'react-native-progress-circle';

import { images } from 'app/themes';
import { nikParser } from 'nik-parser';
import { RFValue } from 'react-native-responsive-fontsize';

type Prop = {
  title: string;
};

export const HeaderSetting: React.FC<Prop> = ({ title }) => {
  const { ktp_data, user_data}: AuthState= useSelector(({ auth }: any) => auth);

  const { colors } = useTheme();
  const { goBack, navigate } = useNavigation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [point, setPoint] = useState<number>(0)
  const [percent, setPercent] = useState<any>(0)


  const styles = StyleSheet.create({
    container: {
      width: widthPercentageToDP(100),
      backgroundColor: colors.primary,
      alignItems: 'center',
      paddingVertical: heightPercentageToDP(4),
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
    pasalButton: {
      height: widthPercentageToDP(10),
      width: widthPercentageToDP(10),
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: widthPercentageToDP(3),
    },
    row: {
      flexDirection: 'row',
      height: heightPercentageToDP(8),
      width: widthPercentageToDP(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowUser: {
      flexDirection: 'row',
      height: heightPercentageToDP(10),
      width: widthPercentageToDP(90),
      justifyContent: 'center',
      paddingHorizontal: 20,
      alignItems: 'center',
      marginVertical: 5
    },
    card: {
      borderRadius: 20,
      width: widthPercentageToDP(90),
      backgroundColor: '#fff',
      marginVertical: heightPercentageToDP(1),
      elevation: 4,
      padding: 20,
    },
  });

  const _goToNotification = () => {
    navigate('Notif');
  };

  const renderText = (point: number) => {
    if(point < 6) {
      return <>
       <Text type="bold" style={{ fontSize: 24, color: '#318C34', marginHorizontal: 0 }}>
                {point}{' '}
                <Text type="bold" style={{ fontSize: 22, color: 'rgba(21, 36, 61, 0.2)' }}>
                  /
                </Text>{' '}
                <Text type="bold" style={{ fontSize: 14, color: 'rgba(21, 36, 61, 0.2)' }}>
                  {' '}
                  18
                </Text>{' '}
              </Text>
      </>
    } else if (point > 5 && point < 9) {
      return <>
       <Text type="bold" style={{ fontSize: 24, color: '#EF8624', marginHorizontal: 0 }}>
                {point}{' '}
                <Text type="bold" style={{ fontSize: 22, color: 'rgba(21, 36, 61, 0.2)' }}>
                  /
                </Text>{' '}
                <Text type="bold" style={{ fontSize: 14, color: 'rgba(21, 36, 61, 0.2)' }}>
                  {' '}
                  18
                </Text>{' '}
              </Text>
      </>
    } else {
      return <>
       <Text type="bold" style={{ fontSize: 24, color: 'red', marginHorizontal: 0 }}>
                {point}{' '}
                <Text type="bold" style={{ fontSize: 22, color: 'rgba(21, 36, 61, 0.2)' }}>
                  /
                </Text>{' '}
                <Text type="bold" style={{ fontSize: 14, color: 'rgba(21, 36, 61, 0.2)' }}>
                  {' '}
                  18
                </Text>{' '}
              </Text>
      </>
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text type="semibold" color={colors.light} size={FontSize.description}>
          {title}
        </Text>
        <TouchableOpacity style={styles.pasalButton} onPress={() => _goToNotification()}>
          <Notif fill={colors.light} />
        </TouchableOpacity>
      </View>

      <View style={styles.rowUser}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 60, width: 60, borderRadius: 100}}>
            {/* <Image
              source={{uri: `${user_data.img_face}`}}
              style={{ resizeMode: 'contain', height: 60, width: 60 }}
            /> */}
             <Image
            // source={{ ktp_data.foto ? uri: `${user_data.img_face}`}}
            source={ ktp_data.foto ? {uri:`data:image/jpeg;base64,${ktp_data.foto}`}: images.global.defaultpp}
            style={{ resizeMode: 'contain', height: 60, width: 60, borderRadius: 0}}
          />
          </View>
        </View>
        <View style={{ flex: 4, paddingHorizontal: 20 }}>
          <Text type="semibold" color={colors.light} size={RFValue(6.5, 540)}>
              Ricky Ariansyah
          </Text>
          <Text type="semibold" color={colors.light} size={RFValue(5, 540)}>
           123443534
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <ProgressCircle
              percent={percent}
              radius={70}
              borderWidth={8}
              color={point < 6 ? '#318C34' : point > 5 && point < 9 ? '#EF8624' : 'red'}
              shadowColor="#D2DBF9"
              bgColor={colors.light}>
             {renderText(point)}
              <Text type="regular" size={RFValue(6, 540)} style={{ marginVertical: 10 }}>
                Total poin
              </Text>
            </ProgressCircle>
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
            <Text type="semibold" size={RFValue(4.7, 540)} style={{ color: '#EF8624' }}>
              Poin Kuning
            </Text>
            <Text type="regular" style={{ color: '#EF8624', fontSize: 24 }}>
              {point}
              <Text type="regular" style={{ color: '#D2DBF9', fontSize: 16 }}>
                {' /18'}
              </Text>
            </Text>

            <Text
              type="regular"
              size={RFValue(4.7, 540)}
              style={{ color: '#ED473B', marginVertical: 5 }}>
              Poin Merah
            </Text>
            <Text type="semibold" style={{ color: '#ED473B', fontSize: 24 }}>
              0
              <Text type="regular" style={{ color: '#D2DBF9', fontSize: 16 }}>
                {' /18'}
              </Text>
            </Text>
          </View>
        </View>

        <Text
          type="regular"
          style={{
            textAlign: 'center',
            color: 'rgba(46, 89, 229, 0.2)',
            marginVertical: 10,
            height: 20,
          }}>
          ---------------------------------------
        </Text>   
      </View>
    </View>
  );
};
