import type { StrapiApp } from '@strapi/strapi/admin';

export default (app: StrapiApp) => {
  app.registerPlugin({});
  app.addReducers({});
  app.addComponents({});
  app.addFields({});
  app.addMiddlewares({});
  app.addLocales([
    // 'en', 'ru', etc
  ]);
  app.bootstrap(() => {
    console.log('Admin panel bootstrapped');
  });

  return app;
};

