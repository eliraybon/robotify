import React from 'react';
import SearchBar from '../search/search_bar_container';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };

    this.container = React.createRef();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({ menuOpen: false });
    };
  }

  toggleMenu() {
    this.setState(state => {
      return { menuOpen: !state.menuOpen }
    });
  }

  render() {
    return (
      <div className="navbar">
        <SearchBar history={ this.props.history} />

        <div className="navbar-menu-container" ref={this.container}>
          <div 
            className="navbar-arrow-container"
            onClick={this.toggleMenu}
          >
            <img
              src="https://robotify-development.s3.amazonaws.com/arrow-down-sign-to-navigate.png"
              width="15px"
              height="15px"
            />
          </div>

          {this.state.menuOpen && (
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <a href="https://github.com/eliraybon">Github</a>
              </li>
              <li className="navbar-menu-item">
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
              <li className="navbar-menu-item" onClick={this.props.logout}>
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
