import type { Context } from '../types';
declare const _default: (context: Context) => {
    playground: {
        isEnabled(): boolean;
    };
    naming: {
        getEnumName: (contentType: import("@strapi/types/dist/struct").Schema, attributeName: string) => string;
        getTypeName: (contentType: import("@strapi/types/dist/struct").Schema, { plurality, }?: {
            plurality?: "singular" | "plural" | undefined;
        }) => string;
        getEntityName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getEntityMetaName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getEntityResponseName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getEntityResponseCollectionName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getRelationResponseCollectionName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getComponentName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getComponentNameFromAttribute: (attribute: {
            type: "component";
            pluginOptions?: object | undefined;
            searchable?: boolean | undefined;
            column?: Partial<import("@strapi/types/dist/schema/attribute").Column> | undefined;
            component: `${string}.${string}`;
            repeatable?: false | undefined;
            configurable?: boolean | undefined;
            min?: number | undefined;
            max?: number | undefined;
            private?: boolean | undefined;
            required?: boolean | undefined;
            writable?: boolean | undefined;
            visible?: boolean | undefined;
        }) => string;
        getDynamicZoneName: (contentType: import("@strapi/types/dist/struct").Schema, attributeName: string) => string;
        getDynamicZoneInputName: (contentType: import("@strapi/types/dist/struct").Schema, attributeName: string) => string;
        getComponentInputName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getContentTypeInputName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getEntityQueriesTypeName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getEntityMutationsTypeName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getFiltersInputTypeName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getScalarFilterInputTypeName: (scalarType: string) => string;
        getMorphRelationTypeName: (contentType: import("@strapi/types/dist/struct").Schema, attributeName: string) => string;
        buildCustomTypeNameGenerator: (options: {
            prefix?: string | undefined;
            suffix?: string | undefined;
            firstLetterCase?: "upper" | "lower" | undefined;
            plurality?: "singular" | "plural" | undefined;
        }) => (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getFindQueryName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getFindOneQueryName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getCreateMutationTypeName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getUpdateMutationTypeName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getDeleteMutationTypeName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
        getFindConnectionQueryName: (contentType: import("@strapi/types/dist/struct").Schema) => string;
    };
    attributes: {
        isStrapiScalar: (attribute: import("@strapi/types/dist/schema/attribute").AnyAttribute) => any;
        isGraphQLScalar: (attribute: import("@strapi/types/dist/schema/attribute").AnyAttribute) => any;
        isMorphRelation: (attribute: import("@strapi/types/dist/schema/attribute").AnyAttribute) => boolean;
        isMedia: (value: any) => boolean;
        isRelation: (value: any) => boolean;
        isEnumeration: (value: any) => boolean;
        isComponent: (value: any) => boolean;
        isDynamicZone: (value: any) => boolean;
    };
    mappers: {
        entityToResponseEntity: (entity: {
            [key: string]: unknown;
            [key: number]: unknown;
            [key: symbol]: unknown;
            id: import("@strapi/types/dist/data").ID;
        }) => {
            id: import("@strapi/types/dist/data").ID;
            attributes: {
                [key: string]: unknown;
                [key: number]: unknown;
                [key: symbol]: unknown;
                id: import("@strapi/types/dist/data").ID;
            };
        };
        entitiesToResponseEntities: import("lodash/fp").LodashMap1x1<{
            [key: string]: unknown;
            [key: number]: unknown;
            [key: symbol]: unknown;
            id: import("@strapi/types/dist/data").ID;
        }, {
            id: import("@strapi/types/dist/data").ID;
            attributes: {
                [key: string]: unknown;
                [key: number]: unknown;
                [key: symbol]: unknown;
                id: import("@strapi/types/dist/data").ID;
            };
        }>;
        graphqlScalarToOperators(graphqlScalar: string): boolean;
        graphQLFiltersToStrapiQuery(filters: any, contentType: import("@strapi/types/dist/struct").Schema): any;
        strapiScalarToGraphQLScalar(strapiScalar: string): any;
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map