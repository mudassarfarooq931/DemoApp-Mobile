import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {BottomTabsNavParamList} from '@routes/param-list';
import {InboxScreen, ProfileScreen, UpdateScreen} from '@screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {}

const Tab = createMaterialBottomTabNavigator<BottomTabsNavParamList>();

const BottomTabNav: React.FC<IProps> = () => {
  return (
    <Tab.Navigator initialRouteName="Inbox" activeColor="#e91e63">
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: 'Inbox',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chat-processing"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Update"
        component={UpdateScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
