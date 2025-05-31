import type { Internal } from '@strapi/types';
import type { Context } from '../../types';
declare const _default: ({ strapi }: Context) => {
    buildDynamicZoneResolver({ contentTypeUID, attributeName, }: {
        contentTypeUID: Internal.UID.ContentType;
        attributeName: string;
    }): (parent: any) => Promise<any>;
};
export default _default;
//# sourceMappingURL=dynamic-zone.d.ts.map