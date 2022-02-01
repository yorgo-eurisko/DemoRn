import React from 'react';
import FormikForm from '../components/FormikForm/FormikForm';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Back!</Text>
      <FormikForm
        initialValue="Yorgo"
        onSubmit={() => navigation.replace('Other')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DB5375',
    alignItems: 'center',
  },
});

export default LoginScreen;
