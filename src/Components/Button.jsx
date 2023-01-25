import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button({
  children, click, sty, dataTestId,
}) {
  return (
    <button
      type="button"
      className={`btn mt-4 ${sty}`}
      onClick={click}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  sty: '',
  children: '',
  click: () => {},
  dataTestId: '',
};
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  click: PropTypes.func,
  sty: PropTypes.string,
  dataTestId: PropTypes.string,
};

export default Button;
