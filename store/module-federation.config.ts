export const mfConfig = {
  name: "store",
  filename: 'remoteEntry.js',
  exposes: {
    '.': './src/store'
  },
   shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
    zustand: {
      singleton: true
    }
  },
};
