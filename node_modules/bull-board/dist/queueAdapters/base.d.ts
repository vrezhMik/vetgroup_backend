import { Job } from 'bull';
import { Job as JobMq } from 'bullmq';
import { JobCleanStatus, JobCounts, JobStatus, QueueAdapter, QueueAdapterOptions } from '../@types/app';
import * as Redis from 'ioredis';
export declare abstract class BaseAdapter implements QueueAdapter {
    readonly readOnlyMode: boolean;
    private formatters;
    protected constructor(options?: Partial<QueueAdapterOptions>);
    setFormatter(field: 'data' | 'returnValue', formatter: (data: any) => any): void;
    format(field: 'data' | 'returnValue', data: any): any;
    abstract clean(queueStatus: JobCleanStatus, graceTimeMs: number): Promise<void>;
    abstract getJob(id: string): Promise<Job | JobMq | undefined | null>;
    abstract getJobCounts(...jobStatuses: JobStatus[]): Promise<JobCounts>;
    abstract getJobs(jobStatuses: JobStatus[], start?: number, end?: number): Promise<(Job | JobMq)[]>;
    abstract getJobLogs(id: string): Promise<string[]>;
    abstract getName(): string;
    abstract getClient(): Promise<Redis.Redis>;
}
