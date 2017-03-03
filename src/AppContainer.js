import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { App } from './components';
import { save, getProfiles } from './redux/reducer';

const mapStateToProps = state => ({
  profiles: getProfiles(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  save
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

