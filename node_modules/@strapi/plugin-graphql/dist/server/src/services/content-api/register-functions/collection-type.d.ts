import type { Core, Struct } from '@strapi/types';
import type { TypeRegistry } from '../../type-registry';
declare const registerCollectionType: (contentType: Struct.CollectionTypeSchema, { registry, strapi, builders, }: {
    registry: TypeRegistry;
    strapi: Core.Strapi;
    builders: any;
}) => void;
export { registerCollectionType };
//# sourceMappingURL=collection-type.d.ts.map