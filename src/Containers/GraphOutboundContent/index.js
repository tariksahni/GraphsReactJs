import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/GraphOutbound';
import GraphOutboundContent from '../../Components/GraphOutboundContent';

const mapStateToProps = ({ graphDataOutbound }) => {
  return { graphDataOutbound };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  GraphOutboundContent,
);
