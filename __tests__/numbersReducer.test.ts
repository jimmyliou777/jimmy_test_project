import { setNumReducer } from '../src/context/reducers/numbersReducer';

describe("number select reducer test", () => {
    let state: { [index: string]: number };
    beforeEach(() => {
        state = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0
        }
    })

    it('select number 1 should number 1 be not zero', () => {
        const result = setNumReducer(state, { type: "SET_NUM", payload: { index: 1, number: "1" } })
        expect(result["1"]).toBe(1);
    });

    it('select number 2 should number 2 be not zero', () => {
        const result = setNumReducer(state, { type: "SET_NUM", payload: { index: 2, number: "2" } })
        expect(result["2"]).toBe(2);
    });

    it('select number 3 should number 3 be not zero', () => {
        const result = setNumReducer(state, { type: "SET_NUM", payload: { index: 3, number: "3" } })
        expect(result["3"]).toBe(3);
    });

    it('select number 6 on index 3,number 6 should be 3', () => {
        const result = setNumReducer(state, { type: "SET_NUM", payload: { index: 3, number: "6" } })
        expect(result["6"]).toBe(3);
    });
})