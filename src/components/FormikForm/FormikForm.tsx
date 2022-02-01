import {
  Button,
  StyleSheet,
  TextInput,
  View,
  ToastAndroid,
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
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.inner}>
            <TextInput
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
            />
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
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: 'white',
    height: 'auto',
    width: '50%',
  },
});
