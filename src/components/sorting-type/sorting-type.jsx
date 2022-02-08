import React from "react";
import PropTypes from "prop-types";

class SortingType extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.list = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
    this.wrapRef = React.createRef();

    this.state = {
      isOpen: false,
      activeTabIndex: 0,
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

    if(e.target.innerHTML !== this.list[this.state.activeTabIndex]){

      this.setState( {activeTabIndex: this.list.indexOf(e.target.innerHTML) });
    }
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
          className={`places__options places__options--custom 
          ${this.state.isOpen
              ? `places__options--opened`
              : `places__options--closed`}`
          }
        >
          {this.list.map( (item, ind) => (
            <li className={`places__option ${this.state.activeTabIndex === ind ? "places__option--active" : ''}`} key={ind} tabIndex="0">{item}</li>
          ))}          
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
