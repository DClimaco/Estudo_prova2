import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import DashboardPage from './src/pages/DashboardPage';
import Tratamento from './src/pages/Tratamento';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='DashboardPage' component={DashboardPage}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='Tratamento' component={Tratamento}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
        <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}