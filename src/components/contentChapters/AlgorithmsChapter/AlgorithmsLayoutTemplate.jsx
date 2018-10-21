import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../../connect';

const mapStateToProps = ({ algorithms }) => ({ algorithmsState: { ...algorithms } });

class AlgorithmsLayoutTemplate extends React.Component {
  onApplyAlgorithmButtonClick = () => {
    this.props.applyAlgorithm({
      algorithmFunc: this.props.algorithmImplementationFunc,
      algorithmName: this.props.algorithmName,
      entryData: this.props.entryData,
    });
  }

  render() {
    const {
      algorithmTitle,
      description,
      entryData,
      algorithmName,
      algorithmsState,
    } = this.props;

    const resultData = algorithmsState[algorithmName] ? algorithmsState[algorithmName].resultData : '';

    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{algorithmTitle}</h5>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-body"><strong>Entry data:</strong> {entryData.toString()}</div>
        <div className="card-body"><button onClick={this.onApplyAlgorithmButtonClick}>Apply algorithm</button></div>
        <div className="card-body"><strong>Result data:</strong>{resultData.toString()}</div>
      </div>
    );
  }
}
AlgorithmsLayoutTemplate.propTypes = {
  algorithmTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  entryData: PropTypes.array,
  algorithmsState: PropTypes.object,
  algorithmName: PropTypes.string,
  algorithmImplementationFunc: PropTypes.func,
  applyAlgorithm: PropTypes.func,
};

export default connect(mapStateToProps)(AlgorithmsLayoutTemplate);
