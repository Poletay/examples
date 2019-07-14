import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../Menu';
import RoutesList from '../../RoutesList';

// Реализация учебных проектов из коллекции: https://github.com/florinpop17/app-ideas

const Challenges = ({ routes }) => (
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

Challenges.propTypes = {
  routes: PropTypes.array,
};

export default Challenges;
