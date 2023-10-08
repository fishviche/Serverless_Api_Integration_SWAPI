/**
 * Filtra y selecciona propiedades específicas de un objeto.
 *
 * @param {Object} object - El objeto del cual se seleccionarán las propiedades.
 * @param {Array} keys - Un arreglo de cadenas que contiene los nombres de las propiedades a seleccionar.
 * @returns {Object} - Un nuevo objeto que contiene solo las propiedades seleccionadas.
 */
const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

module.exports = pick;
