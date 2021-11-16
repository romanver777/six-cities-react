import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BookmarkButton from '../bookmark-button/bookmark-button';
import Mark from '../mark/mark';
import Rating from '../rating/rating';
import Price from '../price/price';

const Card = (props) => {

  const {item, isFavorite} = props;

  const handleClick = (e) => props.onClick(e);
  const handleMouseOver = (e) => props.onMouseOver(e);
  const handleMouseLeave = () => props.onMouseLeave();
  const handleBookmarkClick = (offer, small) => props.onBookmarkClick(offer, small);

  return (
    <article className="cities__place-card place-card"
      id={item.id}
      onMouseOver={() => handleMouseOver(item)}
      onMouseLeave={handleMouseLeave}
    >

      <Mark
        isPremium={item.is_premium}
        prefix="place-card"
      />

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/` + item.hotelId}
          className="buttonLink"
          onClick={() => handleClick(item)}
        >
          <img className="place-card__image" src={item.preview_image} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">

          <Price
            price={item.price}
            prefix="place-card"
          />

          <BookmarkButton
            onBookmarkClick={(small) => handleBookmarkClick(item, small)}
            isActive={isFavorite}
            small={true}
          />

        </div>

        <Rating
          rating={item.rating}
          prefix="place-card"
        />

        <h2 className="place-card__name">
          <Link to={`/offer/${item.hotelId}`}
            className="card__title buttonLink"
            onClick={() => handleClick(item)}
          >{item.title}</Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onBookmarkClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};

export default Card;
