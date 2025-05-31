import type { Schema } from '@strapi/types';
import type { Context } from '../../types';
declare const _default: ({ strapi }: Context) => {
    buildQueriesResolvers({ contentType }: {
        contentType: Schema.ContentType;
    }): {
        findMany(parent: any, args: any, ctx: any): Promise<import("@strapi/types/dist/modules/documents").AnyDocument[]>;
        findFirst(parent: any, args: any, ctx: any): Promise<import("@strapi/types/dist/modules/documents").AnyDocument | null>;
        findOne(parent: any, args: any, ctx: any): Promise<import("@strapi/types/dist/modules/documents").AnyDocument | null>;
    };
};
export default _default;
//# sourceMappingURL=query.d.ts.map