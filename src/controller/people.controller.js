const peopleService = require('../services/people.service');

const getPeople = async(req, res, next) => {
  try{
    const result = await peopleService.getPeople();
    res.json(result);
  } catch(error){
    next(error);
  }
}

const getPerson = async(req, res, next) => {
  try{
    const result = await peopleService.getOnePerson(req.params.id);
    res.json(result);
  } catch(error){
    next(error);
  }
}

const savePerson = async(req, res, next) => {
  try{
    const result = await peopleService.savePerson(req.body);
    res.json(result);
  } catch(error){
    next(error)
  }
}
module.exports = {
  getPeople,
  getPerson,
  savePerson
};