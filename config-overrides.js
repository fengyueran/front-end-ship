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

module.exports = {
  webpack: override(
    useEslintRc(),
    useBabelRc(),
    addDecoratorsLegacy(),
    addWebpackAlias({ src: path.join(__dirname, 'src') }),
    addMyPlugin()
  ),
  jest(config) {
    config.testMatch = ['**/__tests__/*.js?(x)'];
    return config;
  }
};
