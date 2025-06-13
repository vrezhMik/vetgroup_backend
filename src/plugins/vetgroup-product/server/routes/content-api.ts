export default [
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
  {
    method: "POST",
    path: "/publish-other",
    handler: "publish.publishOther",
    config: {
      policies: [],
      auth: false,
    },
  },
];
