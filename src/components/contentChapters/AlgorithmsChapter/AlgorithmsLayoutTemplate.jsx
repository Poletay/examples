import React from 'react';
import PropTypes from 'prop-types';

const AlgorithmsLayoutTemplate = ({
  algorithmTitle, description, entryData, result,
}) => (
  <div className="card">
    <div className="card-header">
      {algorithmTitle}
    </div>
    <div className="card-body">{description}</div>
    <div className="card-body">{entryData}</div>
    <div className="card-body">{result}</div>
  </div>
);

AlgorithmsLayoutTemplate.propTypes = {
  algorithmTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  entryData: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
export default AlgorithmsLayoutTemplate;
