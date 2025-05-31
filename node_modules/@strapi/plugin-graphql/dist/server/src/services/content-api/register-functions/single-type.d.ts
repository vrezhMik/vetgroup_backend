import type { Core, Struct } from '@strapi/types';
import type { TypeRegistry } from '../../type-registry';
declare const registerSingleType: (contentType: Struct.SingleTypeSchema, { registry, strapi, builders, }: {
    registry: TypeRegistry;
    strapi: Core.Strapi;
    builders: any;
}) => void;
export { registerSingleType };
//# sourceMappingURL=single-type.d.ts.map