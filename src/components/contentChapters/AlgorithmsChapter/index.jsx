import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from "react-router-dom";
import Menu from '../../Menu';
import RoutesList from '../../RoutesList';

const AlgorithmsChapter = ({ routes = [] }) => {
  return (
  <div className="chapter-challenges">
    <div className="row">
      <div className="col-3">
        <Menu routes={routes} menuName='left-side-menu' menuType='flex-column' />
      </div>
      <div className="col-9">
        Algorithms must be here:
        <Routes>
          {RoutesList(routes)}
        </Routes>
      </div>
    </div>
  </div>
)
};

AlgorithmsChapter.propTypes = {
  routes: PropTypes.array,
};

export default AlgorithmsChapter;
