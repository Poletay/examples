import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import connect from '../connect';

const mapStateToProps = ({ currentLocation }) => ({ currentLocation });

class RoutesList extends React.Component {
  static propTypes = {
    routesList: PropTypes.array,
    currentLocation: PropTypes.string,
    state: PropTypes.object,
  }

  makeContentsList = (elements) => {
    const currentLocation = this.props.currentLocation === '/' ? '' : this.props.currentLocation;
    const elementsList = elements.map(({ path, component }) => (
      path === '/'
        ? <Route exact key={uniqueId()} path={`${currentLocation}${path}`} component={component} />
        : <Route key={uniqueId()} path={`${currentLocation}${path}`} component={component} />
    ));
    return elementsList;
  }

  render = () => this.makeContentsList(this.props.routesList);
}

export default connect(mapStateToProps)(RoutesList);
