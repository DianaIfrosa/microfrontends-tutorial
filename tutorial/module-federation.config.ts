export const mfConfig = {
  name: "tutorial",
  filename: 'remoteEntry.js', 
  exposes: {},
  remotes: {
    about: "about@http://localhost:3001/remoteEntry.js"
  },
  shared: ["react", "react-dom"],
};
