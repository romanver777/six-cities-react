import React from 'react';
import PropTypes from 'prop-types';

const PropertyGallery = (props) => {

	const {images} = props;
console.log(images);
	return (
		<div className="property__gallery-container container">
			<div className="property__gallery">

				{images.map((img, i) =>
					(
						<div className="property__image-wrapper">
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
};

export default PropertyGallery;
