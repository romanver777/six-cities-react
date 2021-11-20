import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator, Operation} from '../../reducer';

import SortingType from '../sorting-type/sorting-type';
import CardList from '../card-list/card-list';
import CitiesList from '../cities-list/cities-list';
import CitiesNoPlaces from '../cities-no-places/cities-no-places';
import Map from '../map/map';
import Header from '../header/header';

import {getIndex} from '../../helpers/helpers';
import {BASE_PATHNAME, APP_ROUTE, BASE_HASH} from '../../const';

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			hoverItem: null,
		};
	}

	componentDidMount() {
		document.title = `6 cities - ${this.props.city}`;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.city !== this.props.city) {
			this.props.setSortingType(`Popular`);
			document.title = `6 cities - ${this.props.city}`;
		}
	}

	handleCardClick = (item) => this.props.onClick(item);

	handleMouseOver = (item) => this.setState((prevState) => {

		return (prevState.hoverItem !== item) ? {hoverItem: item} : null;
	});

	handleMouseLeave = () => this.setState({hoverItem: null});

	handleCityClick = (city) => this.props.onCityClick(city);

	handleSortOffers = (offers, type) => {
		switch (type) {
			case `Price: low to high`:
				offers.sort((a, b) => a.price - b.price);
				break;
			case `Price: high to low`:
				offers.sort((a, b) => b.price - a.price);
				break;
			case `Top rated first`:
				offers.sort((a, b) => b.rating - a.rating);
				break;
			default: return offers;
		}
		return offers;
	};

	handleBookmarkClick = (offer, small) => {

		const {isAuthorizationRequired, toggleBookmark} = this.props;

		if (isAuthorizationRequired) {
			window.location.assign(BASE_PATHNAME + BASE_HASH + APP_ROUTE.LOGIN);
		} else{
			toggleBookmark(offer);
		}
	};

	render() {

		const {hotels, city, cityOffers, currentUser, isAuthorizationRequired, reload, favoriteList, sortingType, setSortingType} = this.props;
		const index = getIndex(hotels, city);
		const cityCoord = hotels[index].coords;

		return (
			<div className="page page--gray page--main">

				<Header
					isAuthorizationRequired={isAuthorizationRequired}
					currentUser={currentUser}
					onLogoClick={reload}
				/>

				<main className={cityOffers.length ? 'page__main page__main--index'
																			 : 'page__main page__main--index page__main--index-empty'}>

					<CitiesList items={hotels}
											city={city}
											onClick={this.handleCityClick}
					/>

					<div className="cities">

						{cityOffers.length ?
							<div className="cities__places-container container">
								<section className="cities__places places">
									<h2 className="visually-hidden">Places</h2>
									<b className="places__found">{cityOffers.length} places to stay in {city}</b>

									<SortingType
										key={city}
										sortingType={sortingType}
										onChangeOption={(type) => setSortingType(type)}
									/>

									<div className="cities__places-list places__list tabs__content">

										<CardList
											city={city}
											items={this.handleSortOffers([...cityOffers], sortingType)}
											favoriteList={favoriteList}
											onClick={this.handleCardClick}
											onMouseOver={this.handleMouseOver}
											onMouseLeave={this.handleMouseLeave}
											onBookmarkClick={this.handleBookmarkClick}
										/>

									</div>
								</section>
								<div className="cities__right-section">
									<section className="cities_map map">

										<Map
											coords={cityCoord}
											items={cityOffers}
											offerHover={this.state.hoverItem}
										/>

									</section>
								</div>
							</div>

							: <CitiesNoPlaces city={city}/>
						}
					</div>
				</main>
			</div>
		);
	}
}

Main.propTypes = {
	hotels: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired,
	cityOffers: PropTypes.array.isRequired,
	favoriteList: PropTypes.array.isRequired,
	currentUser: PropTypes.object,
	isAuthorizationRequired: PropTypes.bool,
	onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	sortingType: state.sortingType,
});

const mapDispatchToProps = (dispatch) => ({
	toggleBookmark: (cityOffer) => dispatch(Operation.toggleFavoriteList(cityOffer)),
	setSortingType: (type) => dispatch(ActionCreator.setSortingType(type)),
});

export {Main}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
