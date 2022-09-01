/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Config from "react-native-config";

import App from '@/src/App';
import {name as appName} from '@/app.json';
import StorybookUIRoot from '@/.ondevice/Storybook';

AppRegistry.registerComponent(appName, () =>
  Number(Config.ENABLE_STORYBOOK) ? StorybookUIRoot : App
);
