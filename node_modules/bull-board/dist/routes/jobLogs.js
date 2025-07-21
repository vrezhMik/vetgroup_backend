"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobLogs = void 0;
const jobLogs = async (req, res) => {
    const { bullBoardQueues } = req.app.locals;
    const { queueName, id } = req.params;
    const { queue } = bullBoardQueues[queueName];
    if (!queue) {
        return res.status(404).send({
            error: 'Queue not found',
        });
    }
    const job = await queue.getJob(id);
    if (!job) {
        return res.status(404).send({
            error: 'Job not found',
        });
    }
    const logs = await queue.getJobLogs(id);
    return res.json(logs);
};
exports.jobLogs = jobLogs;
//# sourceMappingURL=jobLogs.js.map