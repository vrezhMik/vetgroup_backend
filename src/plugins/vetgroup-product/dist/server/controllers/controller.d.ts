import type { Core } from "@strapi/strapi";
declare const controller: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    index(ctx: any): void;
    uploadFile(ctx: any): Promise<any>;
};
export default controller;
