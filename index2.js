//Challenge 2
const speedLimit = 70
function calculateDemeritPoints(speed){
 const kmPerSecondPerDemeritPoint = 5
 //demerit point added for every 5km/s above speed limit

 if (speed <speedLimit){
    return "Ok";
//print "Ok" if speed Limit is not passed
 }

const speedDifference = speed - speedLimit;
//calculate the speed passed the speed limit
const demeritPoints = Math.floor(speedDifference/kmPerSecondPerDemeritPoint)
//calculate demerit points rounded to the nearest whole number

if (demeritPoints >12){
    return "License suspended";
//print when demerit points are more than 12
}
else {
    return `Points: ${demeritPoints}`
//print if demerit points are less than 12
}
}



