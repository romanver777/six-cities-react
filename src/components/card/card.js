import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

  const {item, index, onMouseOver} = props;

  return (
    <article className="cities__place-card place-card" id={index} onMouseOver={() => onMouseOver(item)}>
      { item.mark
        ? (
          <div className="place-card__mark">
            <span>{item.mark}</span>
          </div>)
        : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={item.img} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{item.priceText}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            {/* <span style="width: 93%"></span>*/}
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" className="card__title">{item.title}</a>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func.isRequired
};

export default Card;
