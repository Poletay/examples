import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../Menu';
import RoutesList from '../../RoutesList';

const AlgorithmsChapter = ({ routes }) => (
  <div className="chapter-algorithms">
    <div className="row">
      <div className="col-3">
        <Menu routes={routes} menuName='left-side-menu' menuType='flex-column' />
      </div>
      <div className="col-9">
        <RoutesList routes={routes} />
      </div>
    </div>
  </div>
);

AlgorithmsChapter.propTypes = {
  routes: PropTypes.array,
};

export default AlgorithmsChapter;
