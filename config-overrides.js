const path = require('path');
const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias,
  useBabelRc,
  useEslintRc
} = require('customize-cra');

const CircularDependencyPlugin = require('circular-dependency-plugin');

const addMyPlugin = () => config => {
  const plugin = new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
    cwd: process.cwd()
  });
  config.plugins.push(plugin);
  return config;
};

const findWebpackPlugin = (plugins, pluginName) =>
  plugins.find(plugin => plugin.constructor.name === pluginName);

const overrideProcessEnv = () => config => {
  const plugin = findWebpackPlugin(config.plugins, 'DefinePlugin');
  const processEnv = plugin.definitions['process.env'] || {};

  if (processEnv.NODE_ENV === `"production"`) {
    processEnv.SERVICE_URL = JSON.stringify('http://140.82.48.232:8000');
    processEnv.STORYBOOK_URL = JSON.stringify(
      'http://140.82.48.232:80/storybook-static'
    );
  } else {
    processEnv.SERVICE_URL = JSON.stringify('http://localhost:8000');
  }
  return config;
};

module.exports = {
  webpack: override(
    useEslintRc(),
    useBabelRc(),
    addDecoratorsLegacy(),
    addWebpackAlias({ src: path.join(__dirname, 'src') }),
    addMyPlugin(),
    overrideProcessEnv()
  ),
  jest(config) {
    config.testMatch = ['**/__tests__/*.js?(x)'];
    return config;
  }
};
