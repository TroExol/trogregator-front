import {connect} from 'react-redux';
import Main from './Main.jsx';
import connector from './connector';
import dispatcher from './dispatcher';

export default connect(connector, dispatcher)(Main);
