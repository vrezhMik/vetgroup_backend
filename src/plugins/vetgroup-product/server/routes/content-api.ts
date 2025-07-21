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
  method: "PUT",
  path: "/:id",
  handler: "update.update",
  config: {
    policies: [],
  },
},
  {
  method: "POST",
  path: "/publish-other",
  handler: "plugin::vetgroup-product.publish.publishOther", // ✅ FIXED
  config: {
    policies: [],
    auth: false,
  },
}
];
