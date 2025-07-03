export const mfConfig = {
  name: "design_system",
  filename: 'remoteEntry.js',
  exposes: {
    '.': './src/ui',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
    classNames: {
      singleton: true
    }
  },
};
