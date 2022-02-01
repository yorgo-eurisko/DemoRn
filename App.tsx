import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoadingScreen from './src/components/LoadingScreen/LoadingScreen';
import LoginScreen from './src/pages/LoginScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtherPage from './src/pages/OtherPage';

const Stack = createNativeStackNavigator();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen message="Loading..." />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Other">
          {props => <OtherPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
