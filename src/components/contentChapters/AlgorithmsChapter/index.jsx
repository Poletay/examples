import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../Menu';
import RoutesList from '../../RoutesList';

export default class AlgorithmsChapter extends React.Component {
  static propTypes = {
    routes: PropTypes.array,
  }

  render() {
    return (
      <div className="chapter-algorithms">
        <div className="row">
          <div className="col-3">
            <Menu routes={this.props.routes} menuName='left-side-menu' menuType='flex-column' />
          </div>
          <div className="col-9">
            <RoutesList routes={this.props.routes} />
          </div>
        </div>
      </div>
    );
  }
}
