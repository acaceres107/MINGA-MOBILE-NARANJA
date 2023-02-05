import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Comics from '../screens/Comics../Comics';
import NewRole from '../screens/Comics../NewRole';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Comics' >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Comics" component={Comics} />
      <Drawer.Screen name="NewRole" component={NewRole} />
    </Drawer.Navigator>
  );
}

export default MyDrawer