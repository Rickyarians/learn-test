import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Image} from 'react-native';

import { Text } from 'app/components/items';
import { useTheme } from 'app/utils';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FontSize, RadiusSizes } from 'types';
import { Back } from 'app/assets/icon';
import { useNavigation } from '@react-navigation/native';
import { Wallet, Notif } from 'app/assets/icon';
import { images } from 'app/themes';
import moment from 'moment';
type Prop = {
  data: any;
};

export const CardSIM: React.FC<Prop> = ({ data}) => {
  const { colors } = useTheme();
 

  const image = { uri: "https://reactjs.org/logo-og.png" }; 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: 250,
      width: '100%'
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    typeSIM: {
      position: 'absolute',
      top: 35,
      right: 70,
      fontSize: 35
    },
    typeNOSIM: {
      position: 'absolute',
      top: 75,
      right: 20,
      fontSize: 14
    },
    foto1: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: 999,
        bottom: 30,
        left: 20,
        borderRadius: 20
    },
    foto2: {
      height: 60,
      width: 60,
      resizeMode: 'contain',
      position: 'absolute',
      zIndex: 1,
      bottom: 30,
      right: 20,
      borderRadius: 20
  },
    ttd: {
      height: 100,
      width: 100,
      resizeMode: 'contain',
      position: 'absolute',
      zIndex: 8,
      bottom: 10,
      left: 30
  },
  dataWrapper: {
    position: 'absolute',
    left: 135,
    top: 100,
    zIndex: 90
  },
  textData: {
      fontSize: 11,
      marginVertical: 1,
      width: 200
  }
  });


  const diffTimeSIM = (start, end) => {
    // start time and end time
      let startTime = moment(start, "YYYY-MM-DD");
      let endTime = moment(end, "YYYY-MM-DD");

      // calculate total duration
      let duration = moment.duration(endTime.diff(startTime));

      // duration in hours
      let years = parseInt(duration.asYears());
      let months = parseInt(duration.months())
      let string = ''
     
      // if(hours > totalTime) {

      // } else {
      //   return 
      // }
      return `${years} Thn ${months} Bln`
  }
  return ( <>
    <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 10}}>
        <View>
            <Text type="semibold" size={FontSize.caption}>SIM {data.license_type}</Text>
        </View>
        <View style={{flex: 1,alignItems: 'flex-end'}}>
          <View style={{backgroundColor: '#ED473B', paddingHorizontal: 20, paddingVertical: 5, borderRadius: 4}}>
              <Text type="semibold" size={FontSize.description} style={{color: '#fff'}}>{diffTimeSIM(data.license_isu_date, data.license_exp_date)}</Text>
          </View>
        </View>
    </View>
    <View style={{marginVertical: 15, borderRadius: 10, minHeight: 200}}>
     <ImageBackground source={images.global.sim} resizeMode="contain" style={styles.image}>
     <Text type="bold" style={styles.typeSIM}>{data.license_type}</Text>
     <Text type="bold" style={styles.typeNOSIM}>{data.license_no_orig}</Text>
     <View style={styles.dataWrapper}> 
        <Text type="semibold" style={styles.textData}>1. {data.nama}</Text>
        <Text type="semibold" style={styles.textData}>2. {data.tempat_lahir}, {data.tgl_lahir}</Text>
        <Text type="semibold" style={styles.textData}>3. {data.blood_type} - {data.jk}</Text>
        <Text type="semibold" style={styles.textData}>4. {data.alamat}</Text>
        <Text type="semibold" style={styles.textData}>5. {data.pekerjaan}</Text>
        <Text type="semibold" style={styles.textData}>6. {data.addr3}</Text>
    </View>
     <Image
        style={styles.foto1}
        source={{uri: `data:image/jpeg;base64,${data.foto1}`}}
      />
      <Image
        style={styles.foto2}
        source={{uri: `data:image/jpeg;base64,${data.foto2}`}}
      />
       {/* <Image
        style={styles.ttd}
        source={{uri: `data:image/png;base64,${data.ttd}`}}
      /> */}

    </ImageBackground>
    </View>
    </>
  );
};
