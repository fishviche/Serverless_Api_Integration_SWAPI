const swapiService = require('../services/swapi.service');

const getPeople = async(req, res, next) => {
  try{
    const result = await swapiService.getTranslatePeople(req.query.page);
    res.json(result);
  } catch(error){
    next(error);
  }
}

module.exports = {
  getPeople,
};