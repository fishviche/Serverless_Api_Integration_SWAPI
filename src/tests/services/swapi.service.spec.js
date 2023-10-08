const axios = require('axios');
const { getTranslatePeople, getTranslatePerson } = require('../../services/swapi.service');

jest.mock('axios');

describe('SWAPI API Functions', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('getTranslatePeople deberia regresa la data traducida', async () => {
    const mockPeopleData = {
      count: 2,
      next: null,
      previous: null,
      results: [
        {
          birth_year: '1990',
          eye_color: 'blue',
          films: ['Film 1', 'Film 2'],
          gender: 'Male',
          hair_color: 'Blond',
          height: '180',
          homeworld: 'Tatooine',
          mass: '70',
          name: 'Luke Skywalker',
          skin_color: 'Fair',
          created: '2023-10-07T03:01:35.024Z',
          edited: '2023-10-07T03:01:35.024Z',
          species: ['Human'],
          starships: ['Ship 1', 'Ship 2'],
          url: 'https://swapi.py4e.com/api/people/1/',
          vehicles: ['Vehicle 1'],
        },
      ],
    };

    axios.get.mockResolvedValue({ data: mockPeopleData });

    const translatedPeople = await getTranslatePeople();

    expect(translatedPeople.cantidad).toBe(2);
    expect(translatedPeople.siguiente).toBeNull();
    expect(translatedPeople.anterior).toBeNull();
    expect(translatedPeople.resultado).toEqual([
      {
        fecha_de_nacimiento: '1990',
        color_de_ojos: 'blue',
        peliculas: ['Film 1', 'Film 2'],
        genero: 'Male',
        color_de_cabello: 'Blond',
        altura: '180',
        mundo_natal: 'Tatooine',
        peso: '70',
        nombre: 'Luke Skywalker',
        color_de_piel: 'Fair',
        creado: '2023-10-07T03:01:35.024Z',
        editado: '2023-10-07T03:01:35.024Z',
        especies: ['Human'],
        naves_especiales: ['Ship 1', 'Ship 2'],
        url: 'https://swapi.py4e.com/api/people/1/',
        vehiculos: ['Vehicle 1'],
      },
    ]);
  });

  test('getTranslatePerson deberia regresar la data de la persona traducida', async () => {
    const mockPersonData = {
      birth_year: '1990',
      eye_color: 'blue',
      films: ['Film 1', 'Film 2'],
      gender: 'Male',
      hair_color: 'Blond',
      height: '180',
      homeworld: 'Tatooine',
      mass: '70',
      name: 'Luke Skywalker',
      skin_color: 'Fair',
      created: '2023-10-07T03:01:35.024Z',
      edited: '2023-10-07T03:01:35.024Z',
      species: ['Human'],
      starships: ['Ship 1', 'Ship 2'],
      url: 'https://swapi.py4e.com/api/people/1/',
      vehicles: ['Vehicle 1'],
    };

    axios.get.mockResolvedValue({ data: mockPersonData });

    const translatedPerson = await getTranslatePerson('1');

    expect(translatedPerson).toEqual({
      fecha_de_nacimiento: '1990',
      color_de_ojos: 'blue',
      peliculas: ['Film 1', 'Film 2'],
      genero: 'Male',
      color_de_cabello: 'Blond',
      altura: '180',
      mundo_natal: 'Tatooine',
      peso: '70',
      nombre: 'Luke Skywalker',
      color_de_piel: 'Fair',
      creado: '2023-10-07T03:01:35.024Z',
      editado: '2023-10-07T03:01:35.024Z',
      especies: ['Human'],
      naves_especiales: ['Ship 1', 'Ship 2'],
      url: 'https://swapi.py4e.com/api/people/1/',
      vehiculos: ['Vehicle 1'],
    });
  });
});
