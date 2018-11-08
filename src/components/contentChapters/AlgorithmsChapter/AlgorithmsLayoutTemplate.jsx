import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../../connect';

const mapStateToProps = ({ algorithms }) => ({ algorithmsState: { ...algorithms } });

class AlgorithmsLayoutTemplate extends React.Component {
  onApplyAlgorithmButtonClick = () => {
    const { func, name, entryData } = this.props.algorithm;
    this.props.applyAlgorithm({
      algorithmFunc: func,
      algorithmName: name,
      entryData,
    });
  }

  render() {
    const {
      algorithm: {
        title,
        name,
        description,
        entryData,
      },
      algorithmsState,
    } = this.props;

    const resultData = algorithmsState[name] ? algorithmsState[name].resultData : '';

    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-body"><strong>Entry data:</strong> <pre>{JSON.stringify(entryData, null, '\t')}</pre></div>
        <div className="card-body"><button onClick={this.onApplyAlgorithmButtonClick}>Apply algorithm</button></div>
        <div className="card-body"><strong>Result data:</strong>  <pre>{JSON.stringify(resultData, null, '\t')}</pre></div>
      </div>
    );
  }
}
AlgorithmsLayoutTemplate.propTypes = {
  algorithm: PropTypes.object.isRequired,
  algorithmsState: PropTypes.object,
  applyAlgorithm: PropTypes.func,
};

export default connect(mapStateToProps)(AlgorithmsLayoutTemplate);
