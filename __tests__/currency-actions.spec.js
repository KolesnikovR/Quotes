import * as actions from '../src/store/currencies/actions';
import { ADD_CURRENCY, REMOVE_CURRENCY } from '../src/store/currencies/consts';

describe('Currencies actions', () => {
    it('should create an action to add a currency', () => {
        const currency = { code: 'USDGBP', price: 2 };
        const expectedAction  = {
            type: ADD_CURRENCY,
            ...currency
        };

        expect(actions.addCurrencyAction(currency.code, currency.price)).toEqual(expectedAction);
    });

    it('should create an action to add a currency', () => {
        const code = 'USDGBP';
        const expectedAction  = {
            type: REMOVE_CURRENCY,
            code
        };

        expect(actions.removeCurrencyAction(code)).toEqual(expectedAction);
    });
});