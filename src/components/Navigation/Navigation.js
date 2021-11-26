import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../../context/AuthContext';
import {Box, Center} from 'native-base';
import RegisterScreen from '../../screens/RegisterScreen';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ExpenseScreen from '../../screens/ExpenseScreen';
import IncomeScreen from '../../screens/IncomeScreen';
import CardScreen from '../../screens/CardScreen';
import SummaryCardScreen from '../../screens/SummaryCardScreen';
import BalanceScreen from '../../screens/BalanceScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [login, setLogin] = useState(true);
  const {user, setUser} = useAuth(null);

  auth().onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
      /*user.getIdToken().then(function (idToken) {
        });*/
    }
  });

  if (user)
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Main Screen'}}
          />
          <Stack.Screen
            name="Expense"
            component={ExpenseScreen}
            options={{title: 'Expenses'}}
          />
          <Stack.Screen
            name="Income"
            component={IncomeScreen}
            options={{title: 'Incomes'}}
          />
          <Stack.Screen
            name="Card"
            component={CardScreen}
            options={{title: 'Cards'}}
          />
          <Stack.Screen
            name="Summary-Card"
            component={SummaryCardScreen}
            options={{title: 'Summary Card'}}
          />
          <Stack.Screen
            name="Balance"
            component={BalanceScreen}
            options={{title: 'Balance'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

  return (
    <Center bg="#01234c" flex={1} px="3">
      <Box h="90%" w="100%" alignItems="flex-start">
        {login ? (
          <LoginScreen setLogin={setLogin} />
        ) : (
          <RegisterScreen setLogin={setLogin} />
        )}
      </Box>
    </Center>
  );
};

export default Navigation;
