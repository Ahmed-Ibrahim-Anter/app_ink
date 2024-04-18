import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AppWeather from '../screens/AppWeather';
/* ------------------------------------ x ----------------------------------- */
const Stack = createStackNavigator();
/* ------------------------------------ x ----------------------------------- */
const AppWrapper = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ffff',
            },
            headerShown: false,
            headerTintColor: '#4a6572',
            headerTitleStyle: {
              fontFamily: 'Almarai_400Regular',
            },
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AppWeather" component={AppWeather} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppWrapper;
