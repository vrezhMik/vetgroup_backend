"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanJob = void 0;
const cleanJob = async (req, res) => {
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
    await job.remove();
    return res.sendStatus(204);
};
exports.cleanJob = cleanJob;
//# sourceMappingURL=cleanJob.js.map