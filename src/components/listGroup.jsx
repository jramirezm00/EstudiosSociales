import React from 'react';

const ListGroup = props => {
  const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;
  return (
    <ul className="list-group list-group-horizontal-lg" style={{ cursor: 'pointer' }}>
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? 'list-group-item active btn btn-primary' : 'list-group-item'
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'nombre',
  valueProperty: '_id'
};

export default ListGroup;
