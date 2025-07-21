"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promoteJob = void 0;
const promoteJob = async (req, res) => {
    const { bullBoardQueues } = req.app.locals;
    const { queueName, id } = req.params;
    const { queue } = bullBoardQueues[queueName];
    if (!queue) {
        return res.status(404).send({
            error: 'Queue not found',
        });
    }
    else if (queue.readOnlyMode) {
        return res.status(405).send({
            error: 'Method not allowed on read only queue',
        });
    }
    const job = await queue.getJob(id);
    if (!job) {
        return res.status(404).send({
            error: 'Job not found',
        });
    }
    await job.promote();
    return res.sendStatus(204);
};
exports.promoteJob = promoteJob;
//# sourceMappingURL=promoteJob.js.map