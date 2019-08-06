export const categorias = [
  { _id: 1, nombre: 'Historia' },
  { _id: 2, nombre: 'Geografía' },
  { _id: 3, nombre: 'Sociología' },
  { _id: 4, nombre: 'Formación Ciudadana' }
];

export function getCategorias() {
  return categorias.filter(c => c);
}
