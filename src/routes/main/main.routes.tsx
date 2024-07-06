import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavParamList} from '@routes/param-list';
import {memo} from 'react';
import BottomTabNav from './bottom-tabs.routes';
import {ChatScreen} from '@screens';
import {ScreenEnum} from '@constants';

interface IProps {}
const {Navigator, Screen} = createNativeStackNavigator<MainNavParamList>();

const MainNav = memo(({}: IProps) => {
  return (
    <Navigator
      initialRouteName="BottomTabNav"
      screenOptions={{headerShown: false}}>
      <Screen name="BottomTabNav" component={BottomTabNav} />
      <Screen name={ScreenEnum.Chat} component={ChatScreen} />
    </Navigator>
  );
});

export default MainNav;
