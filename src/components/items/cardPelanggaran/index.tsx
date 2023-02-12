import { useTheme } from 'app/utils';
import React from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity, View, Platform } from 'react-native';
import { StyleProp } from 'react-native';
import { Colors, FontSize, RadiusSizes } from 'types';
import { Text } from 'app/components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Back2 } from 'app/assets/icon';

type PropCardPelanggaran = {
  point?: Number;
  bobot?: string;
  waktuPelanggaran?: string;
  onPress?: () => void;
  waktuSidang?: string;
  style?: StyleProp<ViewStyle>;
  denda?: Number;
  statusBayar?: string;
};

export const CardPelanggaran: React.FC<PropCardPelanggaran> = ({
  style,
  onPress,
  point,
  bobot,
  waktuPelanggaran,
  waktuSidang,
  denda,
  statusBayar
}) => {
  const { colors } = useTheme();
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
      width: widthPercentageToDP(100),
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      height: widthPercentageToDP(6),
      alignSelf: 'center',
    },
  });
  // const Touchable: any = disabled ? View : TouchableOpacity;

  return (
    <TouchableOpacity style={{backgroundColor: '#fff', borderRadius: 10, marginVertical: 5, elevation: 2, paddingHorizontal: 15, paddingVertical: 15}} onPress={() => _gotoDetailPelanggaran(item)}>
    <View >
    <View style={styles.row}>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#EBF5F9', paddingVertical: 10, borderRadius:8}}>
        <Text type="regular" style={{textAlign: 'center', color: '#2E59E5', marginVertical: 2.5}} size={FontSize.description}>Point</Text>
        <Text type="regular" style={{textAlign: 'center', color: '#2E59E5',  marginVertical: 2.5}} size={FontSize.description}>ddd</Text>
        </View>
      </View>
      <View style={{flex: 4, marginHorizontal: 15}}>
          <Text type="bold" style={{fontSize: 16}}>Pelanggaran Lalu lintas</Text>
          {/* {renderBobotPelanggaran(item.bobot)} */}
      </View>
    </View>

    <View style={[styles.row, {marginTop: 10, marginBottom: 10}]}>
      <View style={{flex: 1}}>
        <Text type="regular" style={{color: '#bdbdbd', marginVertical: 2.5}} size={FontSize.description}>Waktu pelanggaran</Text>
        <Text type="regular" style={{color: '#2E59E5',  marginVertical: 2.5}} size={FontSize.description}>dddd</Text>
      </View>
      <View style={{flex: 1}}>
        <Text type="regular" style={{color: '#bdbdbd', marginVertical: 2.5}} size={FontSize.description}>Sidang</Text>
        <Text type="regular" style={{color: '#318C34',  marginVertical: 2.5}} size={FontSize.description}>ddddd</Text>
      </View>
      
    </View>
    <Text type="regular" style={{color: 'rgba(46, 89, 229, 0.2)',  marginVertical: 0}} size={FontSize.description}>------------------------------------------------------</Text>
    <View style={[styles.row, {marginTop: 10, marginBottom: 10, flex: 1}]}>
      <View style={{flex: 1}}>
        <Text type="regular" style={{color: '#bdbdbd', marginVertical: 2.5}} size={FontSize.description}>Total Denda</Text>
        <Text type="regular" style={{color: '#2E59E5',  marginVertical: 2.5}} size={FontSize.description}>Rp. 500.000</Text>
      </View>
      <View style={{flex: 1, alignSelf:'flex-end'}}>
       {/* {renderStatusPelanggaran(item.status)} */}
      </View>
      <View style={{flex: 1, alignSelf:'flex-end', flexDirection: 'row'}}>
        <Text type="regular" style={{color: '#2E59E5',  marginVertical: 2.5, marginRight: 10}} size={FontSize.description}>Detail</Text>
        <View style={{height: 30, width: 30, borderRadius: 40, backgroundColor: 'rgba(46, 89, 229, 0.2)', justifyContent: 'center', alignItems: 'center'}}>
            <Back2 fill={'#2E59E5'} style={{ transform: [{ rotate: '180deg' }] }} />
        </View>
      </View>
      
    </View>
  </View>
  </TouchableOpacity>
  );
};

CardPelanggaran.defaultProps = {

};
