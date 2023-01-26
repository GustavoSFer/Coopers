import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type, name, value, handleChange, sty, text,
}) {
  return (
    <label htmlFor={name} className="form-label">
      {name}
      <input
        type={type}
        id={name}
        name={name}
        data-testid={name}
        onChange={handleChange}
        value={value}
        className={`form-control ${sty}`}
        placeholder={text}
      />
    </label>
  );
}

Input.defaultProps = { value: '', sty: '' };
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  sty: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Input;
