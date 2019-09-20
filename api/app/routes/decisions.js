// required express router
const router = require('express').Router();

// import the decisions controller
const decisionsCtrl = require('../controllers/decisions');
// GET /decisions route using controller middleware
router.get('/', decisionsCtrl.getPublic);
// get decisions by id /decicions/:id
router.get('/:id', decisionsCtrl.getOneById);
// create a decision /decicions
router.post('/', decisionsCtrl.createDecision);
// PUT update a decision /decicions/:id
router.put('/:id', decisionsCtrl.updateDecision);
// DELETE delete a decision /decicions/:id
router.delete('/:id', decisionsCtrl.removeDecision);
// export as module
module.exports = router;
