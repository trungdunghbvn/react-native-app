import { createStackNavigator } from 'react-navigation';
import Home from '../components/Home';

const Main = createStackNavigator({

  'Home': {
    screen: Home,
    // navigationOptions:{
    //   // headerTitle:'container'
    // }
  },
//   'Account': {
//     screen: Account,
//     navigationOptions:{
//       headerTitle:'account'
//     }
//   },
//   'Detail': {
//     screen: Detail,
//   },
});

export default Main;