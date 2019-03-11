import {FETCH_GAMES} from 'actions';

import _ from 'lodash';

export default ( state = {}, action) => {
    switch (action.type) {
        case FETCH_GAMES:
            return {...state, ..._.mapKeys(action.payload.data, 'id')};
        default: 
            return state;
    }
}