export default () => ({
  "vetgroup-product": {
    enabled: true,
    resolve: "./src/plugins/vetgroup-product",
  },
  "users-permissions": {
    enabled: true,
  },
  "content-type-builder": {
    enabled: true,
  },
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      introspection: true,
    },
  },
   upload: {
    enabled: true,
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 1000000,
      },
    },
  },
});
