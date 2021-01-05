import { ADD_CURRENCY, REMOVE_CURRENCY } from './consts';

export const initialState = {};

export const currencies = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENCY:
            return {...state, [`${action.code}`]: { price: action.price }};
        case REMOVE_CURRENCY:
            const { [`${action.code}`]: removedCurrency, ...newState } = state;
            return newState;
        default:
            return state;
    }
}