import React from 'react';
import FormikForm from '../components/FormikForm/FormikForm';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <FormikForm
        initialValue=""
        onSubmit={() => navigation.replace('Other')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    backgroundColor: '#DB5375',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
  },
});

export default LoginScreen;
