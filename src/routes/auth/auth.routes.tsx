import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavParamList} from '@routes/param-list';
import {LoginScreen, SignupScreen} from '@screens';

interface IProps {}
const {Navigator, Screen} = createNativeStackNavigator<AuthNavParamList>();

const AuthNav: React.FC<IProps> = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  );
};
export default AuthNav;
