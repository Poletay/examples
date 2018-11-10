import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../Menu';
import RoutesList from '../../RoutesList';

const AlgorithmsChapterTemplate = ({ routes }) => (
  <div className="algorithms-chapter">
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

AlgorithmsChapterTemplate.propTypes = {
  routes: PropTypes.array,
};


export default AlgorithmsChapterTemplate;
