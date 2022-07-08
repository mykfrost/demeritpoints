//exercise 4
checkspeed(80);
function checkspeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('Ok');
  }
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
      console.log('Licence Suspended');

    } else {
      console.log('Points ', points);

    }
  }

}