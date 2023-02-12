import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {  View, TouchableOpacity} from 'react-native';
import { Text } from 'app/components';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { FontSize } from 'types';
import NotifPelanggaran from './pelanggaran';
import NotifSurat from './surat-saya';
import { HeaderTitle } from 'app/components/pages/smart-tilang/header';

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row',backgroundColor:"#D2DBF9",borderRadius:17,justifyContent:"center",alignItems:"center", marginVertical: 20, marginHorizontal: 20, padding: 10, elevation: 10, height: heightPercentageToDP(8)}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems:"center"}}
          >
            <View style={{ backgroundColor: isFocused ? '#2E59E5' : 'transparent', flex: 1, width: '100%', borderRadius: 17, justifyContent: 'center'}}>
            <Text type="regular" size={FontSize.description} style={{ color: isFocused ? '#fff' : '#222', textAlign: 'center'}}>
              {label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function Notif() {
  return (
    <>
     <HeaderTitle title="Notifikasi" />
    <>
    <Tab.Navigator style={{backgroundColor: '#F0F3FA'}}  tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Notifications"
        component={NotifPelanggaran}
        options={{ tabBarLabel: 'Notifikasi' }}
      />
      <Tab.Screen
        name="Profile"
        component={NotifSurat}
        options={{ tabBarLabel: 'Inbox' }}
      />
    </Tab.Navigator>
    </>
    </>
  );
}

export default Notif