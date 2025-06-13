export default {
  type: "plugin",
  routes: [
    {
      method: "GET",
      path: "/",
      handler: "controller.index",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/upload",
      handler: "plugin::vetgroup-product.controller.uploadFile",
      config: {
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/sync",
      handler: "plugin::vetgroup-product.syncController.syncWith1C",
      config: {
        policies: [],
      },
    },
  ],
  controllers: {
    controller: "./controllers/controller",
    syncController: "./controllers/sync-controller",
  },
  services: {
    service: "./services/service",
    syncService: "./services/sync-service",
  },
};
