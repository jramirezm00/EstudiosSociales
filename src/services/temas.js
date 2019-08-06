import * as categoriasApi from './categorias';

const temas = [
  {
    _id: '1',
    nombre: 'Definición y su importancia en la vida cotidiana de los Estudios Sociales.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Cuarto Grado',
    liked: true
  },
  {
    _id: '2',
    nombre: 'Etnias de Costa Rica: nombres y ubicación geográfica.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '3',
    nombre: 'Arte de los pueblos originarios de Costa Rica.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '4',
    nombre:
      'Aporte de los pueblos originarios, afrocostarricenses y asiáticos: su importancia en la identidad nacional.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '5',
    nombre: `La sociedad colonial en Costa Rica: ubicación espacial,
       características de la economía y manifestaciones artísticas de la economía:
        latifundio, hacienda, encomienda, etc.`,
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '6',
    nombre: `Instituciones y organización socio-política durante la época de la colonia:
       audiencia, cabildo, cacicazgo, intendencia, virreinato, etc.`,
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '7',
    nombre:
      'La diferenciación de clases según origen de sangre: criollos, mulatos, mestizo, pardo, etc.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '8',
    nombre: `Los problemas étnicos y ciudadanos en la colonia:
       discriminación contra los pueblos originarios y afrodescendientes, la esclavitud y la dominación sobre la mujer.`,
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Quinto Grado'
  },
  {
    _id: '9',
    nombre: 'Definición y su importancia en la vida cotidiana de los Estudios Sociales.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Sexto Grado'
  },
  {
    _id: '10',
    nombre: 'Definición y su importancia en la vida cotidiana de los Estudios Sociales.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Sexto Grado'
  },
  {
    _id: '11',
    nombre: 'Definición y su importancia en la vida cotidiana de los Estudios Sociales.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Sexto Grado'
  },
  {
    _id: '12',
    nombre: 'Definición y su importancia en la vida cotidiana de los Estudios Sociales.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Sexto Grado'
  },
  {
    _id: '13',
    nombre: 'Definición y su importancia en la vida cotidiana de los Estudios Sociales.',
    categoria: { _id: 1, nombre: 'Historia' },
    grado: 'Sexto Grado'
  },
  {
    _id: '14',
    nombre: 'Ubicación hemisférica y continental del país.',
    categoria: { _id: 2, nombre: 'Geografía' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '15',
    nombre: 'Países vecinos de Costa Rica: construcción de lazos entre países centroamericanos.',
    categoria: { _id: 2, nombre: 'Geografía' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '16',
    nombre: 'Principales formas de relieve de Costa Rica: costas, valles y cordilleras.',
    categoria: { _id: 2, nombre: 'Geografía' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '17',
    nombre: 'Características de las formas de relieve de Costa Rica.',
    categoria: { _id: 2, nombre: 'Geografía' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '18',
    nombre: 'Climas de Costa Rica.',
    categoria: { _id: 2, nombre: 'Geografía' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '19',
    nombre: 'Relación del clima y la biodiversidad en Costa Rica.',
    categoria: { _id: 2, nombre: 'Geografía' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '20',
    nombre: 'Regiones socioeconómicas de Costa Rica: ubicación y características.',
    categoria: { _id: 3, nombre: 'Sociología' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '21',
    nombre: 'Impactos culturales, demográficos y sociales de la conquista española.',
    categoria: { _id: 3, nombre: 'Sociología' },
    grado: 'Quinto Grado'
  },
  {
    _id: '22',
    nombre: 'El mestizaje en Costa Rica.',
    categoria: { _id: 3, nombre: 'Sociología' },
    grado: 'Quinto Grado'
  },
  {
    _id: '23',
    nombre:
      'Prevención del consumo de drogas: fortalecer nuestra identidad para la toma de decisiones.',
    categoria: { _id: 3, nombre: 'Sociología' },
    grado: 'Sexto Grado'
  },
  {
    _id: '24',
    nombre: 'Medidas básicas para el manejo de las redes sociales.',
    categoria: { _id: 3, nombre: 'Sociología' },
    grado: 'Sexto Grado'
  },
  {
    _id: '25',
    nombre:
      'Prevención y denuncia del cyberbullying y protección de la integridad física y emocional del estudiante.',
    categoria: { _id: 3, nombre: 'Sociología' },
    grado: 'Sexto Grado'
  },
  {
    _id: '26',
    nombre: 'Definición y su importancia en la vida cotidiana de la Educación Cívica.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '27',
    nombre: 'Formas en que podemos ayudar al medio ambiente: estrategias e instituciones.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '28',
    nombre: `Principales instituciones promotoras de los derechos para los y las estudiantes de mi región:
     MEP, PAIN, EBAIS, Defensoría de los Habitantes.`,
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Cuarto Grado'
  },
  {
    _id: '29',
    nombre: 'Primera Constitución Política de Costa Rica: El Pacto de Concordia.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Quinto Grado'
  },
  {
    _id: '30',
    nombre:
      'Símbolos nacionales e identidad nacional: Escudo, Bandera, Himno Nacional y emblemas nacionales.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Quinto Grado'
  },
  {
    _id: '31',
    nombre: 'Efemérides de Costa Rica: Anexión del Partido de Nicoya, Batalla de Santa Rosa',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Quinto Grado'
  },
  {
    _id: '32',
    nombre: 'Deberes y derechos del estudiante: concepto, importancia y ejemplos.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Sexto Grado'
  },
  {
    _id: '33',
    nombre: `Aplicación, en la vida cotidiana, de los siguientes derechos establecidos en la Constitución Política:
     Toda persona es libre, la vida humana es inviolable, Libertad de pensamiento, Igualdad ante la ley,
      Protección de la madre, el niño, el anciano y el enfermo desvalido, el arte y la cultura en la Constitución.`,
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Sexto Grado'
  },
  {
    _id: '34',
    nombre: 'La participación de los y las estudiantes como ciudadanos.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Sexto Grado'
  },
  {
    _id: '35',
    nombre:
      'Ciudadanía solidaria y participativa consciente de sus derechos y deberes tributarios.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Sexto Grado'
  },
  {
    _id: '36',
    nombre: 'Seguridad Vial: Peatones y pasajeros: conductas responsables.',
    categoria: { _id: 4, nombre: 'Formación Ciudadana' },
    grado: 'Sexto Grado'
  }
];

export function getTemas() {
  return temas;
}
