import type { Context } from '../../types';
declare const _default: (context: Context) => {
    resolvePagination(parent: any, _: any, ctx: any): Promise<{
        total: number;
        page: number;
        pageSize: number;
        pageCount: number;
    }>;
    buildDynamicZoneResolver({ contentTypeUID, attributeName, }: {
        contentTypeUID: `admin::${string}` | `strapi::${string}` | `api::${string}.${string}` | `plugin::${string}.${string}`;
        attributeName: string;
    }): (parent: any) => Promise<any>;
    buildComponentResolver({ contentTypeUID, attributeName, }: {
        contentTypeUID: `admin::${string}` | `strapi::${string}` | `api::${string}.${string}` | `plugin::${string}.${string}`;
        attributeName: string;
    }): (parent: any, args: any, ctx: any) => Promise<any>;
    buildQueriesResolvers({ contentType }: {
        contentType: import("@strapi/types/dist/struct").ContentTypeSchema;
    }): {
        findMany(parent: any, args: any, ctx: any): Promise<import("@strapi/types/dist/modules/documents").AnyDocument[]>;
        findFirst(parent: any, args: any, ctx: any): Promise<import("@strapi/types/dist/modules/documents").AnyDocument | null>;
        findOne(parent: any, args: any, ctx: any): Promise<import("@strapi/types/dist/modules/documents").AnyDocument | null>;
    };
    buildAssociationResolver({ contentTypeUID, attributeName, }: {
        contentTypeUID: `admin::${string}` | `strapi::${string}` | `api::${string}.${string}` | `plugin::${string}.${string}`;
        attributeName: string;
    }): (parent: any, args?: any, context?: any) => Promise<any>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map