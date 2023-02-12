import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ICDumas, ICHome, ICPasal, ICSettings } from 'app/assets/icon';
import { useTheme } from 'app/utils';
import { Text } from 'app/components';
import { HomePageScr } from 'app/modules/main-menu';
import { SettingScr } from 'app/modules/setting';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { RadiusSizes } from 'types';
import HalamanScr from 'app/modules/halaman/halaman';
import { DumasScr } from 'app/modules/dumas';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    box: {
      width: widthPercentageToDP(100 / 4),
      height: heightPercentageToDP(7),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Platform.OS !== 'ios' ? 0 : heightPercentageToDP(2),
    },
    pointer: {
      height: heightPercentageToDP(1),
      width: widthPercentageToDP(6),
      backgroundColor: colors.primary,
      borderTopRightRadius: RadiusSizes.extra_large,
      borderTopLeftRadius: RadiusSizes.extra_large,
    },
    text: {
      marginVertical: 5,
    },
    containerPointer: {
      height: 2,
      marginBottom: -10,
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: heightPercentageToDP(9),
          borderTopRightRadius: RadiusSizes.extra_large,
          borderTopLeftRadius: RadiusSizes.extra_large,
          position: 'absolute',
          shadowColor: colors.shadow_primary,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePageScr}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.box}>
                <ICHome fill={focused ? colors.primary : colors.shadow_primary} />
                <Text
                  type="regular"
                  size={7}
                  style={styles.text}
                  color={focused ? colors.primary : colors.shadow_primary}>
                  Home
                </Text>
                <View style={styles.containerPointer}>
                  {focused && <View style={styles.pointer} />}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Pasal"
        component={HalamanScr}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.box}>
                <ICPasal fill={focused ? colors.primary : colors.shadow_primary} />
                <Text
                  type="regular"
                  size={7}
                  style={styles.text}
                  color={focused ? colors.primary : colors.shadow_primary}>
                  Menu1
                </Text>
                <View style={styles.containerPointer}>
                  {focused && <View style={styles.pointer} />}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Dumas"
        component={DumasScr}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.box}>
                <ICDumas fill={focused ? colors.primary : colors.shadow_primary} />
                <Text
                  type="regular"
                  size={7}
                  style={styles.text}
                  color={focused ? colors.primary : colors.shadow_primary}>
                  Menu2
                </Text>
                <View style={styles.containerPointer}>
                  {focused && <View style={styles.pointer} />}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Pengaturan"
        component={SettingScr}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.box}>
                <ICSettings fill={focused ? colors.primary : colors.shadow_primary} />
                <Text
                  type="regular"
                  size={7}
                  style={styles.text}
                  color={focused ? colors.primary : colors.shadow_primary}>
                  Setting
                </Text>
                <View style={styles.containerPointer}>
                  {focused && <View style={styles.pointer} />}
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
