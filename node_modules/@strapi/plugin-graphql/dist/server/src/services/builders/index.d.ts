/// <reference types="lodash" />
import type { Core } from '@strapi/types';
import type { TypeRegistry } from '../type-registry';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    /**
     * Instantiate every builder with a strapi instance & a type registry
     */
    "new"(name: string, registry: TypeRegistry): unknown;
    /**
     * Delete a set of builders instances from
     * the builders map for a given name
     */
    delete(name: string): void;
    /**
     * Retrieve a set of builders instances from
     * the builders map for a given name
     */
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
export default _default;
//# sourceMappingURL=index.d.ts.map