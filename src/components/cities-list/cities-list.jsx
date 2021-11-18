import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {APP_ROUTE} from '../../const';

const CitiesList = (props) => {

  const {items, city, onClick} = props;

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {items.map((it, i) => {

              return (
                <li className="locations__item"
                  key={i}
                >
                  <Link to={APP_ROUTE.ROOT} className={ (it.city === city) ? `locations__item-link tabs__item buttonLink tabs__item--active`
                    : `locations__item-link tabs__item buttonLink`}
                  style={{color: `#000`, backgroundColor: `#f5f5f5`}}
                  onClick={() => onClick(it.city)}
                  key={i}
                  >
                    <span>{it.city}</span>
                  </Link>
                </li>
              );
            })}

          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

CitiesList.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  city: PropTypes.string.isRequired,
};

export default CitiesList;
