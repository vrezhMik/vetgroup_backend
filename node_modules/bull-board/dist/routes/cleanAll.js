"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanAll = void 0;
const cleanAll = async (req, res) => {
    const { queueName, queueStatus } = req.params;
    const { bullBoardQueues } = req.app.locals;
    const GRACE_TIME_MS = 5000;
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
    await queue.clean(queueStatus, GRACE_TIME_MS);
    return res.sendStatus(200);
};
exports.cleanAll = cleanAll;
//# sourceMappingURL=cleanAll.js.map