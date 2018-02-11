import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/GraphInbound';
import GraphInboundContent from '../../Components/GraphInboundContent';

const mapStateToProps = ({ graphDataInbound }) => {
  return { graphDataInbound };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  GraphInboundContent,
);
