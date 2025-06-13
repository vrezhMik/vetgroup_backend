export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: false,
    },
  },
{
  name: "strapi::cors",
  config: {
    origin: (ctx) => {
  const allowedOrigins = [
    "https://vetgroup.am",
    "https://www.vetgroup.am",
    "http://localhost:3000",
    "http://142.93.135.122:3000",
    "https://studio.apollographql.com",
    "https://sandbox.embed.apollographql.com",
  ];
  const requestOrigin = ctx.request.header.origin;
  console.log("🚀 Request origin:", requestOrigin); // ← ADD THIS LINE
  return allowedOrigins.includes(requestOrigin) ? requestOrigin : false;
},
    credentials: true,
  },
},

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
