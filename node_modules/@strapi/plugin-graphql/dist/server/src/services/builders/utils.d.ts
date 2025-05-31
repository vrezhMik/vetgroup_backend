/// <reference types="lodash" />
import type { Core, Struct } from '@strapi/types';
type ContentTypeArgsOptions = {
    multiple?: boolean;
    isNested?: boolean;
};
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getContentTypeArgs(contentType: Struct.Schema, { multiple, isNested }?: ContentTypeArgsOptions): {
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
    /**
     * Filter an object entries and keep only those whose value is a unique scalar attribute
     */
    getUniqueScalarAttributes(attributes: Struct.SchemaAttributes): {
        [k: string]: import("@strapi/types/dist/schema/attribute").AnyAttribute;
    };
    /**
     * Map each value from an attribute to a FiltersInput type name
     * @param {object} attributes - The attributes object to transform
     * @return {Object<string, string>}
     */
    scalarAttributesToFiltersMap(attributes: Struct.SchemaAttributes): import("lodash").Dictionary<any>;
    /**
     * Apply basic transform to GQL args
     */
    transformArgs(args: any, { contentType, usePagination, }: {
        contentType: Struct.ContentTypeSchema;
        usePagination?: boolean;
    }): import("lodash").Omit<any, "filters" | "pagination">;
};
export default _default;
//# sourceMappingURL=utils.d.ts.map