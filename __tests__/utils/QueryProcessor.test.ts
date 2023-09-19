import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return your andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "janiexio"
          ));
    });

    test('should return your name', () => {
        const query = "	what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "jnxiong"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should find max number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 46, 20, 72?")).toEqual("72");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 21 multiplied by 1?")).toEqual("21");
    });

    test('should test if a number is a square and a cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 121, 1752, 64, 3679, 97, 3214, 1728?")).toEqual("64");
    });
});