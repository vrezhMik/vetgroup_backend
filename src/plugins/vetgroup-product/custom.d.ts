// vetgroup-product/custom.d.ts

import "koa";

declare module "koa" {
  interface BaseContext {
    query: Record<string, any>; // override incompatible type
  }

  interface BaseRequest {
    query: Record<string, any>;
  }
}
