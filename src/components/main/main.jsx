import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation} from '../../reducer';

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
			offers: [],
		};
	}

	componentDidMount() {
		document.title = `6 cities - ${this.props.city}`;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.city !== this.props.city) {
			this.handleSortOffers('Popular');
			document.title = `6 cities - ${this.props.city}`;
		}
	}

	static getDerivedStateFromProps(props, state) {
		if(props.cityOffer !== state.offers) {

			return {
				...state,
				offers: props.cityOffers
			}
		}

		return null;
	}

	handleClick = (item) => this.props.onClick(item);

	handleMouseOver = (item) => this.setState((prevState) => {

		return (prevState.hoverItem !== item) ? {hoverItem: item} : null;
	});

	handleMouseLeave = () => this.setState({hoverItem: null});

	handleCityClick = (city) => this.props.onCityClick(city);

	handleSortOffers = (option) => {

		let {offers} = this.state;

		switch (option) {

			case `Popular`:
				offers.sort((a, b) => {

					if (a.id > b.id) return 1;
					if (a.id < b.id) return -1;
					return 0;
				});
				break;

			case `Price: low to high`:
				offers.sort((a, b) => {

					if (a.price > b.price) return 1;
					if (a.price < b.price) return -1;
					return 0;
				});
				break;

			case `Price: high to low`:
				offers.sort((a, b) => {

					if (a.price < b.price) return 1;
					if (a.price > b.price) return -1;
					return 0;
				});
				break;

			case `Top rated first`:
				offers.sort((a, b) => {

					if (a.rating < b.rating) return 1;
					if (a.rating > b.rating) return -1;
					return 0;
				});
				break;

			default: return null;
		}

		this.setState({offers});
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

		const {hotels, city, cityOffers, currentUser, isAuthorizationRequired, reload, favoriteList} = this.props;
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
										onChangeOption={this.handleSortOffers}
									/>

									<div className="cities__places-list places__list tabs__content">

										<CardList
											city={city}
											items={cityOffers}
											favoriteList={favoriteList}
											onClick={this.handleClick}
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

const mapDispatchToProps = (dispatch) => ({
	toggleBookmark: (cityOffer) => dispatch(Operation.toggleFavoriteList(cityOffer)),
});

export {Main}

export default connect(null, mapDispatchToProps)(Main);
