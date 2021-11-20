import React from "react";
import PropTypes from "prop-types";

class SortingType extends React.PureComponent {
  constructor(props) {
    super(props);

    this.wrapRef = React.createRef();
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.closeSortingList);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.closeSortingList);
  }

  closeSortingList = (e) => {
    if (!this.wrapRef || !this.wrapRef.current.contains(e.target)) {
	  if(this.state.isOpen) this.setState({isOpen: false});
    }
  };

  handleClickToggle = (e) => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleClick = (e) => {
    e.currentTarget
      .querySelector(".places__option--active")
      .classList.remove("places__option--active");
    e.target.classList.add("places__option--active");

    this.handleClickToggle();
    this.props.onChangeOption(e.target.innerHTML);
  };

  render() {
    return (
      <form className="places__sorting" action="#" method="get" ref={this.wrapRef}>
        <span className="places__sorting-caption">Sort by </span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={this.handleClickToggle}
        >
          {this.props.sortingType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul
          onClick={this.handleClick}
          className={
            this.state.isOpen
              ? `places__options places__options--custom places__options--opened`
              : `places__options places__options--custom places__options--closed`
          }
        >
          <li className="places__option places__option--active" tabIndex="0">
            Popular
          </li>
          <li className="places__option" tabIndex="0">
            Price: low to high
          </li>
          <li className="places__option" tabIndex="0">
            Price: high to low
          </li>
          <li className="places__option" tabIndex="0">
            Top rated first
          </li>
        </ul>
      </form>
    );
  }
}

SortingType.propType = {
  onChangeOption: PropTypes.func.isRequired,
  sortingType: PropTypes.string.isRequired,
};

export default SortingType;
