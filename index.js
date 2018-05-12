import { AppRegistry } from 'react-native';
import App from './App';
// import Login from './Login';
// import SignUp from './SignUp';
import LoginScreenV2 from './LoginScreenV2'
// AppRegistry.registerComponent('HelloApp', () => App);
// import DropDownComponent from './components/picker/dropdown';
// AppRegistry.registerComponent('HelloApp', () => SignUp);
// AppRegistry.registerComponent('HelloApp', () => LoginScreenV2);


// import MyScrollView from './component/MyScrollView';
// AppRegistry.registerComponent('HelloApp', () => MyScrollView);

import LoginStackNavigation from './components/LoginStackNavigation'
AppRegistry.registerComponent('HelloApp', () => LoginStackNavigation);
