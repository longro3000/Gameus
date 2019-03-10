import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import gameReducer from './GameReducer';


export default combineReducers({
    auth: authReducer,
    games: gameReducer
});