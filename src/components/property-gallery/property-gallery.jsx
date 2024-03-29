import React from 'react';
import PropTypes from 'prop-types';

import './property-gallery.css';

const PropertyGallery = (props) => {

  const {images, title} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">

        {images.map((img, i) =>
          (
            <div className="property__image-wrapper" key={title + i}>
              <img className="property__image" src={img} alt={`studio${i}`}/>
            </div>
          )
        )}

      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default PropertyGallery;
