import { AppRegistry } from 'react-native';
import App from './App';
// import Login from './Login';
// import SignUp from './SignUp';
import LoginScreenV2 from './LoginScreenV2';
import Login01 from './components/login01/login01';
// AppRegistry.registerComponent('HelloApp', () => App);

// AppRegistry.registerComponent('HelloApp', () => SignUp);
import StackScreen from './components/stackScreen';
AppRegistry.registerComponent('HelloApp', () => StackScreen);
