const swapiService = require('./swapi.service');
const Person = require('../models/people')

const savePerson = async (data) => {
  const person = await Person.create(data);
  return person;
};

const getPeople = async () => {
  return await Person.scan().exec();
};

const getOnePersonDB = async (id) => {
  const person = await Person.get(id);
  return person;
}

const getOnePerson = async (id) => {
  let person = await getOnePersonDB(id);
  if (!person) {
    person = await swapiService.getTranslatePerson(id);
    await savePerson({
      id,
      ...person
    })
  }
  return person;
}

module.exports = {
  savePerson,
  getPeople,
  getOnePerson
}