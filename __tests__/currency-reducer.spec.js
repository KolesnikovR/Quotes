import { initialState, currencies as reducer } from '../src/store/currencies/reducer';
import { ADD_CURRENCY, REMOVE_CURRENCY } from '../src/store/currencies/consts';

describe('Currencies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_CURRENCY', () => {
        let state = reducer(initialState, {
            type: ADD_CURRENCY,
            code: 'USDEUR',
            price: 1.2
        });

        expect(state).toEqual({
            USDEUR: { price: 1.2 }
        });

        expect(reducer(state, {
            type: ADD_CURRENCY,
            code: 'USDGBP',
            price: 2
        })).toEqual({
            USDEUR: { price: 1.2 },
            USDGBP: { price: 2 }
        });
    });

    it('should handle REMOVE_CURRENCY', () => {
        let state = reducer({ USDEUR: { price: 1.2 }, USDGBP: { price: 2 } }, {
            type: REMOVE_CURRENCY,
            code: 'USDEUR'
        });
        expect(state).toEqual({ USDGBP: { price: 2 } });

        state = reducer(state, {
            type: REMOVE_CURRENCY,
            code: 'USDGBP'
        });
        expect(state).toEqual({});

        state = reducer(state, {
            type: REMOVE_CURRENCY,
            code: 'USDGBP'
        });
        expect(state).toEqual({});
    });
});