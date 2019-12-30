// import { createStackNavigator } from 'react-navigation-stack'
// import { createAppContainer } from 'react-navigation'
// import Loading from './src/screens/loading'
// import Register from './src/screens/register'
// import Login from './src/screens/login'
// import Dashboard from './src/screens/dashboard'

// const App = createStackNavigator(
//   {
//     Loading: { screen: Loading },
//     Register: { screen: Register },
//     Login: { screen: Login },
//     Dashboard: { screen: Dashboard },
//   },
//   {
//     initialRouteName: 'Loading'
//   }
// )
// export default createAppContainer(App)

import RootSwitch from './src/Navigator/navigator';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';

export default createAppContainer(RootSwitch);
