import React from 'react';

const Button = ({ style, onClick, children }) => (
  <button style={style} onClick={onClick}>{children}</button>
);

export default Button;
