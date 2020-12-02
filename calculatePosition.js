const calculatePosition = ({startingPosition, daysWaiting, numberOfReferrals}) => {
    let finalPosition = 0;
    let referralPosition = 0;
    // if there are no referrals position becomes startingPosition
    if (numberOfReferrals === 0) {
      finalPosition = startingPosition;
    }
    // if there are referrals each time we iterate we calculate and then subtract the position worth by the number of referrals
    for (let i = 1; i <= numberOfReferrals; i++) {
      referralPosition = referralPosition + 1000/i;
      finalPosition = startingPosition - referralPosition;
    }
    // finally we calculate position based on referrals and also by daysWaiting
    finalPosition = finalPosition * Math.pow(1 - 0.0143, daysWaiting);
  return Math.round(finalPosition);
}

module.exports = calculatePosition;
