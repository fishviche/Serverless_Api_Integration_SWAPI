const dynamoose = require("dynamoose");
const { v4 } = require('uuid')

// Definición del esquema de la tabla 'PeopleTable' en DynamoDB
const personSchema = new dynamoose.Schema({
  id: {
    type: String,
    default: v4()
  },
  nombre: String,
  altura: String,
  peso: String,
  color_de_cabello: String,
  color_de_piel: String,
  color_de_ojos: String,
  fecha_de_nacimiento: String,
  mundo_natal: String,
  peliculas: {
    type: Array,
    schema: [String],
    default: [],
  },
  especies: {
    type: Array,
    schema: [String],
    default: [],
  },
  vehiculos: {
    type: Array,
    schema: [String],
    default: [],
  },
  naves_especiales: {
    type: Array,
    schema: [String],
    default: [],
  },
  creado: {
    type: String,
    default: new Date().toISOString(),
  },
  editado: {
    type: String,
    default: new Date().toISOString(),
  },
  url: String,
});

const Person = dynamoose.model("People", personSchema);
// new dynamoose.Table("PeopleTable", [Person]);
module.exports = Person;