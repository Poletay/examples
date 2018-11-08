import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../Menu';
import RoutesList from '../../../RoutesList';

const SearchAlgorithms = ({ routes }) => (
  <div className="chapter-search-algorithms">
    <div className="row">
      <div className="col-9">
        <RoutesList routes={routes} />
      </div>
      <div className="col-3">
        <Menu routes={routes} menuName='right-side-menu' menuType='flex-column' />
      </div>
    </div>
  </div>
);

SearchAlgorithms.propTypes = {
  routes: PropTypes.array,
};


export default SearchAlgorithms;
