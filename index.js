import { AppRegistry } from 'react-native';
import App from './App';
// import Login from './Login';
// import SignUp from './SignUp';
import LoginScreenV2 from './LoginScreenV2'
// AppRegistry.registerComponent('HelloApp', () => App);
// import DropDownComponent from './components/picker/dropdown';
// AppRegistry.registerComponent('HelloApp', () => SignUp);
// AppRegistry.registerComponent('HelloApp', () => LoginScreenV2);
console.disableYellowBox = true;

// import MyScrollView from './component/MyScrollView';
// AppRegistry.registerComponent('HelloApp', () => MyScrollView);

import ExampleTabNavigation from './components/ParentStackNavigator'
AppRegistry.registerComponent('HelloApp', () => ExampleTabNavigation);
// import ExampleDrawerNavigation from './components/ExampleDrawerNavigation';
// AppRegistry.registerComponent('HelloApp', () => ExampleDrawerNavigation);
