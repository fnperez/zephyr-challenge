export const mfConfig = {
  name: "checkout",
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    '@ds': 'design_system@http://localhost:3001/remoteEntry.js',
    '@store': 'store@http://localhost:3002/remoteEntry.js',
  },
  shared: ["react", "react-dom"],
};
