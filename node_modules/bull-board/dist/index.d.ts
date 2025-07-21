import { Express } from 'express-serve-static-core';
import { QueueAdapter } from './@types/app';
export { BullMQAdapter } from './queueAdapters/bullMQ';
export { BullAdapter } from './queueAdapters/bull';
declare const router: Express;
export declare const setQueues: (bullQueues: ReadonlyArray<QueueAdapter>) => void;
export declare const replaceQueues: (bullQueues: ReadonlyArray<QueueAdapter>) => void;
export { router };
