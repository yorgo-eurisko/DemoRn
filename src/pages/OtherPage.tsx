import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import React from 'react';
import DisableButton from '../components/disableButton/DisableButton';

const OtherPage: React.FC<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <DisableButton
          title="Press This Button To Disable"
          btnTitle="Click to Disable"
        />
      </View>
    </SafeAreaView>
  );
};

export default OtherPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFBE99',
    alignItems: 'center',
    paddingTop: 25,
  },
});
