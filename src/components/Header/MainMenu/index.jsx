import React from 'react';
import PropTypes from 'prop-types';

export default class MainMenu extends React.Component {
  static propTypes = {
    mainAppStructure: PropTypes.array,
  }

  render() {
    console.log(this.props.mainAppStructure);
    return (
      <div className="main-menu">
        Main menu implementation here!!
      </div>
    );
  }
}
