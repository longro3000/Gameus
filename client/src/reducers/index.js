import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import gameReducer from './GameReducer';
import streamReducer from './streamReducer';


export default combineReducers({
    auth: authReducer,
    games: gameReducer,
    streams: streamReducer
});