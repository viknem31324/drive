const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/shared/assets/styles/vars.scss";
          @import "~@/shared/assets/styles/mixins.scss";
          @import "~@/shared/assets/styles/fonts.scss";
        `,
        
      },
    },
  },
});
