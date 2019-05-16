import { init } from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import localforage from 'localforage';
import * as models from '../models';

import appModelTransform from './transform';

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  name: 'WebSQL'
});

const whitelist = ['question'];

const persistPlugin = createRematchPersist({
  version: 1,
  whitelist,
  storage: localforage,
  throttle: 1000,
  transforms: [appModelTransform],
  writeFailHandler: e => console.log(e) //eslint-disable-line
});

const store = init({
  models,
  plugins: [persistPlugin]
});

export default store;
