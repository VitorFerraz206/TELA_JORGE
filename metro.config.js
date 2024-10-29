const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig.getDefaultValues("metro");

  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'], // Suporte para assets do Expo, caso utilize
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "db"), // Exclui "db" dos assetExts
      sourceExts: [...sourceExts, "db"], // Adiciona "db" aos sourceExts
    },
    watchFolders: [
      // Adicione caminhos a serem observados, se necessário
    ],
  };
})();
