import type { Schema } from '@strapi/types';
import type { Context } from '../types';
declare const _default: ({ strapi }: Context) => {
    isStrapiScalar: (attribute: Schema.Attribute.AnyAttribute) => any;
    isGraphQLScalar: (attribute: Schema.Attribute.AnyAttribute) => any;
    isMorphRelation: (attribute: Schema.Attribute.AnyAttribute) => boolean;
    isMedia: (value: any) => boolean;
    isRelation: (value: any) => boolean;
    isEnumeration: (value: any) => boolean;
    isComponent: (value: any) => boolean;
    isDynamicZone: (value: any) => boolean;
};
export default _default;
//# sourceMappingURL=attributes.d.ts.map