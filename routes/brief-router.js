const briefsRouter = require('express').Router();
const briefsController = require('../controllers/brief.controller');

// GET
briefsRouter.get('/briefs', briefsController.getBriefs);
briefsRouter.get('/briefs/:brief_id', briefsController.getBriefById);
briefsRouter.get('/briefs/:brief_id/quote', briefsController.getQuoteById);

// POST
briefsRouter.post('/briefs/create', briefsController.postBrief);

// // UPDATE
// clientsRouter.put(
// 	'/clients/:client_id',
// 	clientsController.updateClientPassword
// );s

// // DELETE
// clientsRouter.delete('/clients/:client_id', clientsController.deleteClient);

// // LOGIN
// // clientsRouter.post('/clients/login', clientsController.loginClient);

module.exports = briefsRouter;
