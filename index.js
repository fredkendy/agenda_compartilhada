/**
 * @format
 */

//Primeiro arquivo a ser executado, chama o App.js

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
