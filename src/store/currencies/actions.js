import { ADD_CURRENCY, REMOVE_CURRENCY } from './consts';

export const addCurrencyAction = (code, price) => ({
    type: ADD_CURRENCY,
    code,
    price
});

export const removeCurrencyAction = (code) => ({
    type: REMOVE_CURRENCY,
    code
});