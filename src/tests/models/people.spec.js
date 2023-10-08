const Person = require('../../models/people');

test('El modelo de persona se ha definido correctamente', () => {
  expect(Person).toBeDefined();
});

test('Crear una nueva instancia de persona', () => {
  const personData = {
    nombre: 'Juan',
    altura: '175',
    peso: '70',
  };

  const person = new Person(personData);

  expect(person).toMatchObject(personData);
});
