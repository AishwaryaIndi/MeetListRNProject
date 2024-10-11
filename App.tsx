import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeListScreen from './src/EmployeeListScreen';
import MeetListScreen from './src/MeetListScreen';
import {ROUT_NAME} from './src/constants/Constants';

// Stack Navigator
const Stack = createNativeStackNavigator();

// App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUT_NAME.EMPLOYEE_LIST}>
        <Stack.Screen
          name={ROUT_NAME.EMPLOYEE_LIST}
          component={EmployeeListScreen}
        />
        <Stack.Screen name={ROUT_NAME.MEET_LIST} component={MeetListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
