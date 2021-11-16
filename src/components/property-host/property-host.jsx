import React from 'react';
import PropTypes from 'prop-types';
import {BASE_PATHNAME} from '../../const';

const PropertyHost = (props) => {

  const {offer} = props;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={BASE_PATHNAME + `/` + offer.host.avatar_url} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">{offer.host.name}</span>
        <span className="property__user-status">{offer.host.is_pro ? `Pro` : ``}</span>
      </div>
      <div className="property__description">
        <p className="property__text">{offer.description}</p>
      </div>
    </div>
  );
};

PropertyHost.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default PropertyHost;
