const calculatePosition = require('./calculatePosition.js');

describe("Calculate Position", () => {
    test("it should calculate waitlist position based on referrals and how many days they have been waiting", () => {
        expect(calculatePosition(10000,0,0)).toBe(10000); // 0 referrals 0 days
        expect(calculatePosition(10000,0,1)).toBe(9000); // 1 referral
        expect(calculatePosition(10000,0,2)).toBe(8500); // 2 refferals
        expect(calculatePosition(10000,0,3)).toBe(8167); // 3 referrals
        expect(calculatePosition(10000,1,0)).toBe(9857); // 0 referrals and 1 day
        expect(calculatePosition(10000,2,1)).toBe(8744); // 0 referrals and 2 days
        expect(calculatePosition(10000,100,1)).toBe(2134); // 0 referrals and 2 days
    });
});