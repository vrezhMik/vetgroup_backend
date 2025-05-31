import type { Struct, Schema } from '@strapi/types';
import type { Context } from '../types';
declare const _default: ({ strapi }: Context) => {
    getEnumName: (contentType: Struct.Schema, attributeName: string) => string;
    getTypeName: (contentType: Struct.Schema, { plurality, }?: {
        plurality?: 'singular' | 'plural';
    }) => string;
    getEntityName: (contentType: Struct.Schema) => string;
    getEntityMetaName: (contentType: Struct.Schema) => string;
    getEntityResponseName: (contentType: Struct.Schema) => string;
    getEntityResponseCollectionName: (contentType: Struct.Schema) => string;
    getRelationResponseCollectionName: (contentType: Struct.Schema) => string;
    getComponentName: (contentType: Struct.Schema) => string;
    getComponentNameFromAttribute: (attribute: Schema.Attribute.Component) => string;
    getDynamicZoneName: (contentType: Struct.Schema, attributeName: string) => string;
    getDynamicZoneInputName: (contentType: Struct.Schema, attributeName: string) => string;
    getComponentInputName: (contentType: Struct.Schema) => string;
    getContentTypeInputName: (contentType: Struct.Schema) => string;
    getEntityQueriesTypeName: (contentType: Struct.Schema) => string;
    getEntityMutationsTypeName: (contentType: Struct.Schema) => string;
    getFiltersInputTypeName: (contentType: Struct.Schema) => string;
    getScalarFilterInputTypeName: (scalarType: string) => string;
    getMorphRelationTypeName: (contentType: Struct.Schema, attributeName: string) => string;
    buildCustomTypeNameGenerator: (options: {
        prefix?: string;
        suffix?: string;
        firstLetterCase?: 'upper' | 'lower';
        plurality?: 'plural' | 'singular';
    }) => (contentType: Struct.Schema) => string;
    getFindQueryName: (contentType: Struct.Schema) => string;
    getFindOneQueryName: (contentType: Struct.Schema) => string;
    getCreateMutationTypeName: (contentType: Struct.Schema) => string;
    getUpdateMutationTypeName: (contentType: Struct.Schema) => string;
    getDeleteMutationTypeName: (contentType: Struct.Schema) => string;
    getFindConnectionQueryName: (contentType: Struct.Schema) => string;
};
export default _default;
//# sourceMappingURL=naming.d.ts.map