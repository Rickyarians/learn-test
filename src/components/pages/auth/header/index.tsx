import React, { useLayoutEffect } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import { Text } from 'app/components/items';
import { StatusBar } from 'react-native';
import { Back } from 'app/assets/icon/';
import { FontSize, RadiusSizes } from 'types';
import { useTheme } from 'app/utils';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

type Prop = {
  type?: 'one-title' | 'two-title' | 'assesment';
  title: string;
  subtitle?: string;
  stateIndex?: number;
};

const Header: React.FC<Prop> = ({ type, title, subtitle, stateIndex = 1 }) => {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  const styles = StyleSheet.create({
    container: {
      height: heightPercentageToDP(13),
      width: widthPercentageToDP(100),
      backgroundColor: colors.light,
      paddingTop: heightPercentageToDP(5),
      flexDirection: 'row',
      paddingHorizontal: widthPercentageToDP(5),
    },
    containerTitle: {
      marginLeft: widthPercentageToDP(10),
      marginTop: 10,
    },
    containerNoSubtitle: {
      marginLeft: widthPercentageToDP(5),
      position: 'absolute',
      bottom: heightPercentageToDP(-2),
    },
    ic_back: {
      position: 'absolute',
      left: widthPercentageToDP(5),
      bottom: heightPercentageToDP(3),
    },
    list: {
      width: widthPercentageToDP(75 / 6),
      height: 5,
      backgroundColor: colors.primary,
      marginRight: 4,
      marginTop: widthPercentageToDP(2),
      borderRadius: RadiusSizes.extra_large,
    },
  });

  useLayoutEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS !== 'ios') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  });

  const renderItem = ({ index }: any) => {
    const id: number = index;
    return (
      <View
        style={[
          styles.list,
          { backgroundColor: stateIndex > id ? colors.primary : colors.primary + 20 },
        ]}
      />
    );
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={goBack} activeOpacity={0.6} style={styles.ic_back}>
        <Back fill={colors.text} />
      </TouchableOpacity>
      {type === 'two-title' ? (
        <View style={styles.containerTitle}>
          <Text type="bold" size={FontSize.description}>
            {title}
          </Text>
          <Text type="light" size={FontSize.description - 2}>
            {subtitle}
          </Text>
          <FlatList
            data={Array(6)}
            scrollEnabled={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, idx: number) => idx.toString()}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <View style={styles.containerNoSubtitle}>
          <Text type="bold" size={FontSize.title}>
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;

Header.defaultProps = {
  type: 'one-title',
};
