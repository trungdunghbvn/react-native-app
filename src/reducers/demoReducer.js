import {
    ADD_COUNT
} from '../constants/index';

const defaultState = {
    count:0
};
const demoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};

export default demoReducer;