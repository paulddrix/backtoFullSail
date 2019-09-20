// load in the decisions model
const { Decisions } = require('../models');
// get all the decisions with a type of public
exports.getPublic = (req, res) => {
  // run the function to retrieve all entries
  const decisions = Decisions.findAll();
  // filter the decisions to show only the public
  const publicDecisions = decisions.filter(decision => decision.type === 'public');
  // send json of the public decisions array
  res.json(publicDecisions);
};

// find a single decision by the id
exports.getOneById = (req, res) => {
  // get id from route params
  const { id } = req.params;
  // use the model method to search by Id
  const decision = Decisions.findByPk(id);
  // if no decision is found
  if (!decision) {
    // return a 404
    res.sendStatus(404);
    return;
  }
  // send back decicion
  res.json(decision);
};

exports.createDecision = (req, res) => {
  // get title and type value from the json obj
  const { title, type } = req.body;
  // create the itema dn save it.
  const id = Decisions.create({ title, type });
  // send the new id to the request
  res.json({ id });
};

exports.updateDecision = (req, res) => {
  // get the id
  const { id } = req.params;
  //  get list of updated decisions
  const updateDecisions = Decisions.update(req.body, id);
  // send back the list of the updated decisions
  res.json(updateDecisions);
};

exports.removeDecision = (req, res) => {
  // get the id fomr route params
  const { id } = req.params;
  // remove the decision
  Decisions.destroy(id);
  // snede a good status code
  res.sendStatus(200);
};
