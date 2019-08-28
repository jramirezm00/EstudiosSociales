import React from 'react';
import { Link } from 'react-router-dom';

const GamePad = props => {
  return (
    <div>
      <Link to="/crossword">
        <i class="fa fa-gamepad" aria-hidden="true" style={{ cursor: 'pointer' }} />
      </Link>
    </div>
  );
};

export default GamePad;
