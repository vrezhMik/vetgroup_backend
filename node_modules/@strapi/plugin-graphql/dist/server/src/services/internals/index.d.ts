import type { Context } from '../types';
declare const _default: (context: Context) => {
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
export default _default;
//# sourceMappingURL=index.d.ts.map