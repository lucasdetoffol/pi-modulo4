import React from 'react';

import Page1 from './src/Page1';
import Page2 from './src/Page2';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const routes = createAppContainer(
  createStackNavigator({
    Index: index,
  })
);

export default routes;