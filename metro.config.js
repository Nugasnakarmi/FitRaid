const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// expo-sqlite uses wa-sqlite on web which requires WASM asset support
config.resolver.assetExts.push('wasm');

module.exports = config;
