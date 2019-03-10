import history from '../history';
import streams from 'apis/streams';

export const SIGN_IN = 'sign_in';
export const SIGN_OUT = 'sign_out';
export const FETCH_GAMES ='fetch_games';

export const SignIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const SignOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const fetchGames = () => async dispatch => {
    const reponse = await streams.get('/games/top');

    dispatch({ type: FETCH_GAMES, payload: reponse.data});
}

export const fetchStreams = () => async dispatch => {
    const reponse = await streams.get('/streams/');

    dispatch({ type: FETCH_GAMES, payload: reponse.data});
}