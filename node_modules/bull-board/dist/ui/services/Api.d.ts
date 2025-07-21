import { GetQueues } from '../../@types/api';
import { SelectedStatuses } from '../../@types/app';
export declare class Api {
    private axios;
    constructor({ basePath }?: {
        basePath: string;
    });
    getQueues({ status, }: {
        status: SelectedStatuses;
    }): Promise<GetQueues>;
    retryAll(queueName: string): Promise<void>;
    cleanAllDelayed(queueName: string): Promise<void>;
    cleanAllFailed(queueName: string): Promise<void>;
    cleanAllCompleted(queueName: string): Promise<void>;
    cleanJob(queueName: string, jobId: string | number | undefined): Promise<void>;
    retryJob(queueName: string, jobId: string | number | undefined): Promise<void>;
    promoteJob(queueName: string, jobId: string | number | undefined): Promise<void>;
    getJobLogs(queueName: string, jobId: string | number | undefined): Promise<string[]>;
    private handleResponse;
    private handleError;
}
