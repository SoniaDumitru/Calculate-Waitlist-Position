const calculatePosition = (startingPosition, daysWaiting, numberOfReferrals) => {
    let finalPosition = 0;
    let referralPosition = 0;
    if (numberOfReferrals === 0) {
        finalPosition = startingPosition;
    }
    for (let i = 1; i <= numberOfReferrals; i++) {
        referralPosition = referralPosition + Math.round(1000/i);
        finalPosition = startingPosition - referralPosition;
    }
    for (let j = 1; j <= daysWaiting; j++) {
        finalPosition = finalPosition - Math.round(0.0143 * finalPosition);
    } 
    return finalPosition;
}

module.exports = calculatePosition;