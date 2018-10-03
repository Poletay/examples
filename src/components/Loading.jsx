import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ error }) => {
  if (error) {
    return <div>Error!</div>;
  }
  return <div>Loading...</div>;
};

Loading.propTypes = {
  error: PropTypes.instanceOf(Error),
};

export default Loading;
