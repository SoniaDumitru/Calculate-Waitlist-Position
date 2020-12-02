const calculatePosition = require('./calculatePosition.js');

describe("Calculate Position", () => {
    test("it should calculate waitlist position based on referrals and how many days they have been waiting", () => {
        expect(calculatePosition({ startingPosition: 10000, daysWaiting: 0,  numberOfReferrals: 0 })).toBe(10000); // 0 referral
    });
    test("it should return waitlist position of 8500 if 2 referrals and 0 days waiting" , () => {
        expect(calculatePosition({ startingPosition: 10000, daysWaiting: 0,  numberOfReferrals: 2 })).toBe(8500); // 2 referrals
    });
    test("it should return waitlist position of 8167 if 3 referrals and 0 days waiting" , () => {
        expect(calculatePosition({ startingPosition: 10000, daysWaiting: 0,  numberOfReferrals: 3 })).toBe(8167); // 3 referrals
    });
    test("it should return waitlist position of 8167 if 0 referrals and 1 days waiting" , () => {
        expect(calculatePosition({ startingPosition: 10000, daysWaiting: 1,  numberOfReferrals: 0 })).toBe(9857); // 0 referrals and 1 day
    });
    test("it should return waitlist position of 8167 if 1 referrals and 2 days waiting" , () => {
        expect(calculatePosition({ startingPosition: 10000, daysWaiting: 2,  numberOfReferrals: 1 })).toBe(8744); // 1 referrals and 2 days
    });
    test("it should return waitlist position of 8167 if 1 referrals and 2 days waiting" , () => {
        expect(calculatePosition({ startingPosition: 10000, daysWaiting: 100,  numberOfReferrals: 1 })).toBe(2132); // 1 referrals and 100 days    
    });
});
