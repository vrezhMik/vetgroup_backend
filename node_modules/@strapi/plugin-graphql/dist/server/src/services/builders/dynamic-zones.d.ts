import type { Schema } from '@strapi/types';
import type { Context } from '../types';
declare const _default: ({ strapi }: Context) => {
    /**
     * Build a Nexus dynamic zone type from a Strapi dz attribute
     */
    buildDynamicZoneDefinition(definition: Schema.Attribute.DynamicZone, name: string, inputName: string): (import("nexus/dist/core").NexusScalarTypeDef<string> | import("nexus/dist/core").NexusUnionTypeDef<string>)[];
};
export default _default;
//# sourceMappingURL=dynamic-zones.d.ts.map