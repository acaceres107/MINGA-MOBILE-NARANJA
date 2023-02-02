import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

export default MyDrawer