const axios = require('axios');
const boom = require('@hapi/boom');

const API_SWAPI = 'https://swapi.py4e.com/api';

// Cada función realiza una única tarea específica.

// Obtiene personas desde SWAPI paginadas
const getPeopleFromSWAPI = async (page) => {
  const params = { page };
  const url = API_SWAPI + '/people?' + new URLSearchParams(params);
  const response = await axios.get(url);
  return response.data;
};

// Obtiene una persona específica desde SWAPI por ID
const getPerson = async (id) => {
  try {
    const url = API_SWAPI + `/people/${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    if (err.code === 'ERR_BAD_REQUEST') {
      throw boom.badRequest('Not found');
    }
  }
}

const translatePersonModel = (person) => {
  return {
    fecha_de_nacimiento: person.birth_year,
    color_de_ojos: person.eye_color,
    peliculas: person.films,
    genero: person.gender,
    color_de_cabello: person.hair_color,
    altura: person.height,
    mundo_natal: person.homeworld,
    peso: person.mass,
    nombre: person.name,
    color_de_piel: person.skin_color,
    creado: person.created,
    editado: person.edited,
    especies: person.species,
    naves_especiales: person.starships,
    url: person.url,
    vehiculos: person.vehicles,
  }
}

const getTranslatePeople = async (page = 1) => {
  const people = await getPeopleFromSWAPI(page);
  const translatePeople = people.results.map(e => translatePersonModel(e));
  return {
    cantidad: people.count,
    siguiente: people.next,
    anterior: people.previous,
    resultado: translatePeople,
  }
}

const getTranslatePerson = async (id) => {
  const person = await getPerson(id);
  return translatePersonModel(person);
}

module.exports = {
  getTranslatePeople,
  getTranslatePerson,
}