export const mfConfig = {
  name: "about",
  filename: 'remoteEntry.js', 
  exposes: {
     "./Banner": "./src/Banner",
     "./GetMoreInfoButton": "./src/GetMoreInfoButton"
  },
  shared: ["react", "react-dom"],
};
