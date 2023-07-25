import { sum } from "./sum";

describe("sum", () => {
  it("should sum 1 more 2 and the result is 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
