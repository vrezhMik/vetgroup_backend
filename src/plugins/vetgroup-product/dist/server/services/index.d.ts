declare const _default: {
    service: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getWelcomeMessage(): string;
    };
    syncService: ({ strapi }: {
        strapi: any;
    }) => {
        syncItems(): Promise<string>;
    };
};
export default _default;
