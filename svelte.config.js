const autoPreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: "typescript",
    },
    scss: {
      prependData: `@import 'src/scss/_variables.scss';`,
    },
  }),
};
