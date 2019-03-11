import history from '../history';
import streams from 'apis/streams';

export const SIGN_IN = 'sign_in';
export const SIGN_OUT = 'sign_out';
export const FETCH_GAMES = 'fetch_games';
export const FETCH_STREAMS = 'fetch_streams';

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
    const response = await streams.get('/games/top');

    dispatch({ type: FETCH_GAMES, payload: response.data});
}

export const fetchStreams = (gameId) => async dispatch => {
    const response = await streams.get(`/streams?game_id=${gameId}&first=5`);
    
    dispatch({ type: FETCH_STREAMS, payload: response.data});
}