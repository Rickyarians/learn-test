import { useTheme } from 'app/utils';
import React, { useLayoutEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

type Prop = {
  children: any;
  barStyle?: 'dark-content' | 'light-content';
};
const Layout: React.FC<Prop> = ({ children, barStyle = 'light-content' }) => {
  const { colors } = useTheme();
  useLayoutEffect(() => {
    StatusBar.setBarStyle(barStyle);
    if (Platform.OS !== 'ios') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.light,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

export default Layout;
