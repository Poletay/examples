import React from 'react';
import PropTypes from 'prop-types';
import MainLogo from './MainLogo';
import MainMenu from './MainMenu';

class Header extends React.Component {
  static propTypes = {
    mainAppStructure: PropTypes.array,
  }

  render() {
    return (
      <div className="main-header">
        <MainLogo />
        <MainMenu mainAppStructure={this.props.mainAppStructure} />
      </div>
    );
  }
}

export default Header;
