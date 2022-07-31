import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, type, className }) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

Button.protoTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};
