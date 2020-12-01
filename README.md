Objective: Design an algorithm to automatically move individuals up the waitlist based off how many referrals they have and how many days they have been waiting.
For each friend they refer, they also move up (1000 / # of Referral). For example, the first referral is worth 1,000, the 2nd 500, the 3rd 333, etc…
For each day waiting, the user moves up 1.43% of the waitlist for that day. We calculate the % per day after taking into consideration # of referrals
Finally, the number should be rounded up.
For example, if someone is originally #10,000 in the waitlist:

1 referal = 9000
2 referrals = 8500
3 referrals = 8167
0 referrals and 1 day = 9857
0 referrals and 2 days = 9716
1 referral and 2 days = 8744
1 referral and 100 days = 2132

Please design a function that satisfies the following method signature:
function calculatePosition({ startingPosition, daysWaiting, numberOfReferrals }): Integer
Your code should also include a test suite that covers a range of situations.
Please start with “npm init” and “npm install --save-dev jest”.