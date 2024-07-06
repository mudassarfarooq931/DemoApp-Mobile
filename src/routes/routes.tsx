import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AuthNav from './auth/auth.routes';
import {colors} from '@constants';
import MainNav from './main/main.routes';
import {isReadyRef, navigationRef, routeNameRef} from '../../navigation-helper';

interface IProps {}

//-----------------------------------------
const Routes: React.FC<IProps> = ({}) => {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationRef?.current?.getCurrentRoute()?.name;
          isReadyRef.current = true;
        }}>
        <StatusBar
          barStyle={'light-content'}
          translucent={false}
          backgroundColor={colors.primaryPink}
        />
        <SafeAreaView style={{backgroundColor: colors.primaryPink, flex: 0}} />
        <SafeAreaView style={{flex: 1, backgroundColor: colors.primaryPink}}>
          {currentUser ? (
            <>
              <MainNav />
            </>
          ) : (
            <AuthNav />
          )}
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default Routes;
