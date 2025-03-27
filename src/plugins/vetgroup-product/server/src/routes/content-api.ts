export default [
  {
    method: "GET",
    path: "/",
    // name of the controller file & the method.
    handler: "controller.index",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/upload",
    handler: "plugin::vetgroup-product.controller.uploadFile", // ✅ Correct controller reference
    config: {
      policies: [],
    },
  },
];
