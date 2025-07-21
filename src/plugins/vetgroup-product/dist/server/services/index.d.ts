import * as syncService from "./sync-service";
declare const _default: {
    service: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getWelcomeMessage(): string;
    };
    syncService: typeof syncService;
};
export default _default;
