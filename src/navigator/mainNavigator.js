import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile67266Navigator from '../features/UserProfile67266/navigator';
import Tutorial67265Navigator from '../features/Tutorial67265/navigator';
import NotificationList67237Navigator from '../features/NotificationList67237/navigator';
import Settings67236Navigator from '../features/Settings67236/navigator';
import Settings67228Navigator from '../features/Settings67228/navigator';
import UserProfile67226Navigator from '../features/UserProfile67226/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile67266: { screen: UserProfile67266Navigator },
Tutorial67265: { screen: Tutorial67265Navigator },
NotificationList67237: { screen: NotificationList67237Navigator },
Settings67236: { screen: Settings67236Navigator },
Settings67228: { screen: Settings67228Navigator },
UserProfile67226: { screen: UserProfile67226Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
