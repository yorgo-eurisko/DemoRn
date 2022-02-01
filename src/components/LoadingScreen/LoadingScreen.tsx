import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

type props = {
  message: string;
};

const LoadingScreen: React.FC<props> = ({ message = 'Loading' }) => {
  return (
    <View style={styles.pageStyle}>
      <Text>{message}</Text>
      <ActivityIndicator style={styles.loadingStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingStyle: {
    width: 50,
    height: 50,
  },
});

export default LoadingScreen;
