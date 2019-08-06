import React from 'react';
import Like from './like';

const TemasTable = props => {
  const { temas, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Tema</th>
          <th>Categoria</th>
          <th>Grado</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {temas.map(tema => (
          <tr key={tema._id}>
            <td>{tema.nombre}</td>
            <td>{tema.categoria.nombre}</td>
            <td>{tema.grado}</td>
            <td>
              <Like liked={tema.liked} onClick={() => onLike(tema)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TemasTable;
