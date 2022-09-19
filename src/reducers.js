import {combineReducers} from 'redux';
import Main from './components/Main/reducer';
import AuthPage from './pages/Auth/reducer';
import MainPage from './pages/Main/reducer';

export default combineReducers({
    Main,
    AuthPage,
    MainPage,
});