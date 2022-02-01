import {
  Button,
  StyleSheet,
  TextInput,
  View,
  ToastAndroid,
  Text,
} from 'react-native';
import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { loginPage } from '../../Utils/ValidationSchemas';

type props = {
  initialValue: string;
  onSubmit: any;
};
type myFormValues = {
  username: string;
};

const FormikForm: React.FC<props> = ({ initialValue, onSubmit }) => {
  const initialValues: myFormValues = { username: initialValue };

  const onSubmitHandler = useCallback(
    values => {
      ToastAndroid.show(
        `YOu have Submitted the form ${values.username}`,
        ToastAndroid.SHORT,
      );
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={loginPage}
        initialValues={initialValues}
        onSubmit={onSubmitHandler}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.inner}>
            <Text style={styles.header}>Login</Text>
            {console.log(values)}
            <TextInput
              placeholder="username"
              value={values.username}
              onBlur={handleBlur('username')}
              onChangeText={handleChange('username')}
            />
            {errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default FormikForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  inner: {
    borderRadius: 10,
    padding: 15,
    marginTop: 50,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    width: '75%',
  },
  error: {
    color: 'red',
    marginVertical: 5,
  },
});
