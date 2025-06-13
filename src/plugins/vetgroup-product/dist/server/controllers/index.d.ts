declare const _default: {
    controller: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        index(ctx: any): void;
        uploadFile(ctx: any): Promise<any>;
    };
    syncController: {
        syncWith1C(ctx: any): Promise<void>;
    };
    publish: ({ strapi }: {
        strapi: any;
    }) => {
        publishOther(ctx: any): Promise<void>;
    };
};
export default _default;
