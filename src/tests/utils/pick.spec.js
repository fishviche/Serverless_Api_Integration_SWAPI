const pick = require('../../utils/pick');

// Caso de prueba 1: Probar cuando algunas claves existen en el objeto
test('seleccionando claves existentes de un objeto', () => {
  const objeto = { a: 1, b: 2, c: 3 };
  const resultado = pick(objeto, ['a', 'c', 'd']);

  // El resultado debería contener solo 'a' y 'c'
  expect(resultado).toEqual({ a: 1, c: 3 });
});

// Caso de prueba 2: Probar cuando no se proporcionan claves
test('no seleccionar ninguna clave de un objeto', () => {
  const objeto = { a: 1, b: 2, c: 3 };
  const resultado = pick(objeto, []);
  // El resultado debería ser un objeto vacío
  expect(resultado).toEqual({});
});

// Caso de prueba 3: Probar cuando todas las claves existen en el objeto
test('seleccionar todas las claves existentes de un objeto', () => {
  const objeto = { a: 1, b: 2, c: 3 };
  const resultado = pick(objeto, ['a', 'b', 'c']);
  // El resultado debería ser igual al objeto original
  expect(resultado).toEqual(objeto);
});

// Caso de prueba 4: Probar cuando el objeto es nulo
test('seleccionar claves de un objeto nulo', () => {
  const objeto = null;
  const resultado = pick(objeto, ['a', 'b']);
  // El resultado debería ser un objeto vacío
  expect(resultado).toEqual({});
});
