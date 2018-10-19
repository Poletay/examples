import React from 'react';
import PropTypes from 'prop-types';

const AlgorithmsLayoutTemplate = ({
  algorithmTitle, description, entryData, result,
}) => (
  <div className="card">
    <div className="card-header">
      <h5 className="card-title">{algorithmTitle}</h5>
    </div>
    <div className="card-body">{description}</div>
    <div className="card-body"><strong>Entry data:</strong> {entryData}</div>
    <div className="card-body"><button>Apply algorithm</button></div>
    <div className="card-body"><strong>Result data:</strong>{result}</div>
  </div>
);

AlgorithmsLayoutTemplate.propTypes = {
  algorithmTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  entryData: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
export default AlgorithmsLayoutTemplate;
