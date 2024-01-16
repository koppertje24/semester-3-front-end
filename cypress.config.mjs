import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    //baseUrl: 'http://localhost:8000',
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
