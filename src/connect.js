import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions';

export default mapStateToProps => Component => withRouter(
  connect(
    mapStateToProps,
    actionCreators,
  )(Component),
);
