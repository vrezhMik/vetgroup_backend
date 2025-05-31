/// <reference types="lodash" />
import { bootstrap } from './bootstrap';
declare const _default: {
    config: {
        default: {
            shadowCRUD: boolean;
            endpoint: string;
            subscriptions: boolean;
            maxLimit: number;
            apolloServer: {};
            v4CompatibilityMode: string | boolean;
        };
    };
    bootstrap: typeof bootstrap;
    services: {
        builders: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            "new"(name: string, registry: import("./services/type-registry").TypeRegistry): unknown;
            delete(name: string): void;
            get(name: string): any;
            filters: {
                operators: import("lodash").Dictionary<{
                    fieldName: string;
                    strapiOperator: string;
                    add(t: import("nexus/dist/core").ObjectDefinitionBlock<string>, type: string): void;
                }>;
            };
            utils: {
                getContentTypeArgs(contentType: import("@strapi/types/dist/struct").Schema, { multiple, isNested }?: {
                    multiple?: boolean | undefined;
                    isNested?: boolean | undefined;
                }): {
                    filters?: undefined;
                    pagination?: undefined;
                    sort?: undefined;
                    documentId?: undefined;
                    status?: undefined;
                } | {
                    filters: any;
                    pagination: any;
                    sort: any;
                    documentId?: undefined;
                    status?: undefined;
                } | {
                    documentId: import("nexus/dist/core").NexusNonNullDef<any>;
                    status: any;
                    filters?: undefined;
                    pagination?: undefined;
                    sort?: undefined;
                } | undefined;
                getUniqueScalarAttributes(attributes: import("@strapi/types/dist/struct").SchemaAttributes): {
                    [k: string]: import("@strapi/types/dist/schema/attribute").AnyAttribute;
                };
                scalarAttributesToFiltersMap(attributes: import("@strapi/types/dist/struct").SchemaAttributes): import("lodash").Dictionary<any>;
                transformArgs(args: any, { contentType, usePagination, }: {
                    contentType: import("@strapi/types/dist/struct").ContentTypeSchema;
                    usePagination?: boolean | undefined;
                }): import("lodash").Omit<any, "filters" | "pagination">;
            };
        };
        'content-api': ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            buildSchema: () => import("graphql").GraphQLSchema;
        };
        constants: () => {
            PAGINATION_TYPE_NAME: string;
            RESPONSE_COLLECTION_META_TYPE_NAME: string;
            DELETE_MUTATION_RESPONSE_TYPE_NAME: string;
            PUBLICATION_STATUS_TYPE_NAME: string;
            GRAPHQL_SCALARS: readonly ["ID", "Boolean", "Int", "String", "Long", "Float", "JSON", "Date", "Time", "DateTime"];
            STRAPI_SCALARS: readonly ["boolean", "integer", "string", "richtext", "blocks", "enumeration", "biginteger", "float", "decimal", "json", "date", "time", "datetime", "timestamp", "uid", "email", "password", "text"];
            GENERIC_MORPH_TYPENAME: string;
            KINDS: {
                readonly type: "type";
                readonly component: "component";
                readonly dynamicZone: "dynamic-zone";
                readonly enum: "enum";
                readonly entity: "entity";
                readonly entityResponse: "entity-response";
                readonly entityResponseCollection: "entity-response-collection";
                readonly relationResponseCollection: "relation-response-collection";
                readonly query: "query";
                readonly mutation: "mutation";
                readonly input: "input";
                readonly filtersInput: "filters-input";
                readonly scalar: "scalar";
                readonly morph: "polymorphic";
                readonly internal: "internal";
            };
            GRAPHQL_SCALAR_OPERATORS: {
                readonly ID: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly Boolean: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly String: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly Int: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly Long: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly Float: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly Date: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly Time: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly DateTime: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
                readonly JSON: readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"];
            };
            SCALARS_ASSOCIATIONS: {
                readonly uid: "String";
                readonly email: "String";
                readonly password: "String";
                readonly text: "String";
                readonly boolean: "Boolean";
                readonly integer: "Int";
                readonly string: "String";
                readonly enumeration: "String";
                readonly richtext: "String";
                readonly blocks: "JSON";
                readonly biginteger: "Long";
                readonly float: "Float";
                readonly decimal: "Float";
                readonly json: "JSON";
                readonly date: "Date";
                readonly time: "Time";
                readonly datetime: "DateTime";
                readonly timestamp: "DateTime";
            };
            ERROR_CODES: {
                readonly emptyDynamicZone: "dynamiczone.empty";
            };
            ERROR_TYPE_NAME: string;
        };
        extension: ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => {
            shadowCRUD: (uid: string) => {
                isEnabled(): boolean;
                isDisabled(): boolean;
                areQueriesEnabled(): boolean;
                areQueriesDisabled(): boolean;
                areMutationsEnabled(): boolean;
                areMutationsDisabled(): boolean;
                isActionEnabled(action: string): boolean;
                isActionDisabled(action: string): boolean;
                disable(): any;
                disableQueries(): any;
                disableMutations(): any;
                disableAction(action: string): any;
                disableActions(actions?: never[]): any;
                field(fieldName: string): {
                    isEnabled(): boolean;
                    hasInputEnabled(): boolean;
                    hasOutputEnabled(): boolean;
                    hasFiltersEnabeld(): boolean;
                    disable(): any;
                    disableOutput(): any;
                    disableInput(): any;
                    disableFilters(): any;
                };
            };
            use(configuration: import("./services/extension/extension").Configuration | import("./services/extension/extension").ConfigurationFactory): any;
            generate({ typeRegistry }: {
                typeRegistry: object;
            }): import("./services/extension/extension").Extension;
        };
        format: () => {
            returnTypes: {
                toEntityResponse(value: unknown, info?: import("./services/format/return-types").InfoType): {
                    value: unknown;
                    info: {
                        args: unknown;
                        resourceUID: string | undefined;
                    };
                };
                toEntityResponseCollection(nodes: unknown[], info?: import("./services/format/return-types").InfoType): {
                    nodes: unknown[];
                    info: {
                        args: unknown;
                        resourceUID: string | undefined;
                    };
                };
            };
        };
        internals: (context: import("./services/types").Context) => {
            args: {
                SortArg: import("nexus/dist/core").NexusArgDef<any>;
                PaginationArg: import("nexus/dist/core").NexusArgDef<any>;
                PublicationStatusArg: import("nexus/dist/core").NexusArgDef<any>;
            };
            scalars: {
                JSON: import("nexus/dist/core").AllNexusOutputTypeDefs;
                DateTime: import("nexus/dist/core").AllNexusOutputTypeDefs;
                Time: import("nexus/dist/core").AllNexusOutputTypeDefs;
                Date: import("nexus/dist/core").AllNexusOutputTypeDefs;
                Long: import("nexus/dist/core").AllNexusOutputTypeDefs;
            };
            buildInternalTypes: () => {
                [x: number]: {
                    error: import("nexus/dist/core").NexusObjectTypeDef<any>;
                    pagination: {
                        Pagination: import("nexus/dist/core").NexusObjectTypeDef<any>;
                    };
                    responseCollectionMeta: {
                        ResponseCollectionMeta: import("nexus/dist/core").NexusObjectTypeDef<any>;
                    };
                    deleteDocumentResponse: {
                        DeleteMutationResponse: import("nexus/dist/core").NexusObjectTypeDef<any>;
                    };
                    publicationStatus?: undefined;
                } | {
                    publicationStatus: {
                        PublicationStatus: import("nexus/dist/core").NexusEnumTypeDef<any>;
                    };
                    error?: undefined;
                    pagination?: undefined;
                    responseCollectionMeta?: undefined;
                    deleteDocumentResponse?: undefined;
                } | {
                    scalars: any;
                    error?: undefined;
                    pagination?: undefined;
                    responseCollectionMeta?: undefined;
                    deleteDocumentResponse?: undefined;
                    publicationStatus?: undefined;
                };
            };
            helpers: {
                getEnabledScalars: () => (string | readonly ["and", "or", "not", "eq", "eqi", "ne", "nei", "startsWith", "endsWith", "contains", "notContains", "containsi", "notContainsi", "gt", "gte", "lt", "lte", "null", "notNull", "in", "notIn", "between"] | undefined)[];
            };
        };
        'type-registry': () => {
            new: () => import("./services/type-registry").TypeRegistry;
        };
        utils: (context: import("./services/types").Context) => {
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
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map