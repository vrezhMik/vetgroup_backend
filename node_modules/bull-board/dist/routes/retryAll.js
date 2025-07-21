"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryAll = void 0;
const retryAll = async (req, res) => {
    const { queueName } = req.params;
    const { bullBoardQueues } = req.app.locals;
    const { queue } = bullBoardQueues[queueName];
    if (!queue) {
        return res.status(404).send({ error: 'queue not found' });
    }
    else if (queue.readOnlyMode) {
        return res.status(405).send({
            error: 'Method not allowed on read only queue',
        });
    }
    const jobs = await queue.getJobs(['failed']);
    await Promise.all(jobs.map((job) => job.retry()));
    return res.sendStatus(200);
};
exports.retryAll = retryAll;
//# sourceMappingURL=retryAll.js.map