export default {
  routes: [
    {
      method: "POST",
      path: "/products/upload-csv",
      handler: "product.uploadCsv",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
