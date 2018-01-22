import { Navigation } from 'react-native-navigation';

import SplashScreen from './SplashScreen';
import Dashboard from './Dashboard';
import WalletScreen from './WalletScreen';
import CreateKeyStep1 from './Key/Create/CreateKeyStep1';
import CreateKeyStep2 from './Key/Create/CreateKeyStep2';
import CreateKeyStep3 from './Key/Create/CreateKeyStep3';
import VarifyKeyStep1 from './Key/Varify/VarifyKeyStep1';
import VarifyKeyStep2 from './Key/Varify/VarifyKeyStep2';
import VarifyKeyStep3 from './Key/Varify/VarifyKeyStep3';
import Intro from './Intro/RNSwiper';
import SendMoney from './WalletScreen/SendMoney';
import ReceiveMoneyScreen from './WalletScreen/ReceiveMoney';
import ChatScreen from './ChatScreen';
import NationsScreen from './NationsScreen';
import ProfileScreen from './ProfileScreen';
import NationDetailsScreen from './NationDetailsContainer';
import NationCreateScreen from './NationCreateContainer';
import Screens from '../global/Screens';

export function registerScreens(store, Provider) {

  Navigation.registerComponent(Screens.CREATE_KEY_SCREEN_STEP_1.screen, () => CreateKeyStep1, store, Provider);
  Navigation.registerComponent(Screens.CREATE_KEY_SCREEN_STEP_2.screen, () => CreateKeyStep2, store, Provider);
  Navigation.registerComponent(Screens.CREATE_KEY_SCREEN_STEP_3.screen, () => CreateKeyStep3, store, Provider);
  Navigation.registerComponent(Screens.VERIFY_KEY_SCREEN_STEP_1.screen, () => VarifyKeyStep1, store, Provider);
  Navigation.registerComponent(Screens.VERIFY_KEY_SCREEN_STEP_2.screen, () => VarifyKeyStep2, store, Provider);
  Navigation.registerComponent(Screens.VERIFY_KEY_SCREEN_STEP_3.screen, () => VarifyKeyStep3, store, Provider);
  Navigation.registerComponent(Screens.INTRO_SCREEN.screen, () => Intro, store, Provider);

  Navigation.registerComponent(Screens.DASHBOARD_SCREEN.screen, () => Dashboard, store, Provider);
  Navigation.registerComponent(Screens.SPLASH_SCREEN.screen, () => SplashScreen, store, Provider);
  Navigation.registerComponent(Screens.CHAT_SCREEN.screen, () => ChatScreen, store, Provider);
  Navigation.registerComponent(Screens.NATIONS_SCREEN.screen, () => NationsScreen, store, Provider);
  Navigation.registerComponent(Screens.NATION_DETAILS_SCREEN.screen, () => NationDetailsScreen, store, Provider);
  Navigation.registerComponent(Screens.NATION_CREATE_SCREEN.screen, () => NationCreateScreen, store, Provider);
  Navigation.registerComponent(Screens.WALLET_SCREEN.screen, () => WalletScreen, store, Provider);
  Navigation.registerComponent(Screens.PROFILE_SCREEN.screen, () => ProfileScreen, store, Provider);
  Navigation.registerComponent(Screens.RECEIVE_MONEY_SCREEN.screen, () => ReceiveMoneyScreen, store, Provider);
  Navigation.registerComponent(Screens.SEND_MONEY_SCREEN.screen, () => SendMoney, store, Provider);

}