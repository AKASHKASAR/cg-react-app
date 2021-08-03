import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Action from './actions';
import ReduxApp from './ReduxApp';

const mapStateToProps = (state) => {
    console.log('state mapped to props, state.data: ' + state.data);
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log('map dispatched to props');
    return bindActionCreators({ onChange: Action }, dispatch);
}
const DataMapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxApp)

export default DataMapper;

