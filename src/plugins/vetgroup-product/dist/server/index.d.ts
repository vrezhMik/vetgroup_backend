declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => Promise<void>;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: {};
        validator(): void;
    };
    controllers: {
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
    routes: {
        'content-api': {
            type: string;
            routes: ({
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                    auth?: undefined;
                };
            } | {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                    auth: boolean;
                };
            })[];
        };
    };
    services: {
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
    contentTypes: {};
    policies: {};
    middlewares: {};
};
export default _default;
