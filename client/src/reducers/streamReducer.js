import _ from 'lodash';
import { FETCH_STREAMS } from 'actions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return state = _.mapKeys(action.payload.data, 'id');
        default: 
            return state;
    }
}