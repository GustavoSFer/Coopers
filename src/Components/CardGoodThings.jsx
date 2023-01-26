import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function CardGoodThings({ img, text }) {
  return (
    <section className="good-things-notice float-end">
      <div className="mb-3">
        <img src={img} alt={text} className="img" />
      </div>
      <div className="p-2">
        <p className="func">function</p>
        <p className="p-2 size">
          {text}
        </p>
        <div className="ps-2">
          <p className="color">read more</p>
        </div>
      </div>
    </section>
  );
}

CardGoodThings.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardGoodThings;
