import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import PageTwo from './PageTwo';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  PageTwo: {screen: PageTwo}
},
{
  initialRouteName: "Home"
});

const App = createAppContainer(MainNavigator);

export default App;