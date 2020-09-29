import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, isWeb, Alert } from 'unikit';
import { AppContextProvider, useAppContext } from './AppContext';

import Home from './screens/Home';
import Template from './screens/Template';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: !isWeb,
  safeAreaInset: 'never',
};

function AppLayout() {
  const { dark } = useAppContext();
  const linking = {
    prefixes: ['https://unikit.netlify.de'],
    config: {
      screens: {
        Unikit: {
          path: '/',
        },
        Template: {
          path: '/component/:slug',
        },
      },
    },
  };

  return (
    <NavigationContainer
      linking={linking}
      documentTitle={{
        formatter: (options, route) =>
          `${options?.title ?? (route?.params?.slug || 'home')} - unikit`,
      }}
    >
      <ThemeProvider mode={dark ? 'dark' : 'basic'} theme={{}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Unikit"
            component={Home}
            options={{
              ...screenOptions,
            }}
          />
          <Stack.Screen
            name="Template"
            component={Template}
            options={{
              ...screenOptions,
            }}
          />
        </Stack.Navigator>

        <Alert />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <AppLayout />
    </AppContextProvider>
  );
}
