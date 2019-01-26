let HomeRun = (obj1, obj2) => {


  let numOfRunners = Object.values(obj1).reduce(
    (acc, cur) => acc + cur, 0
  );

  obj1.firstBase = 0;
  obj1.secondBase = 0;
  obj1.thirdBase = 0;
  obj1.homePlate = 0;

  if(numOfRunners >= 1){
    if(obj2.currentSide === 'home'){
      return obj2.homeScore += numOfRunners;
    } else {
      return obj2.awayScore += numOfRunners;
    }
  } else {
    if(obj2.currentSide === 'home'){
      return obj2.homeScore += 1;
    } else {
      return obj2.awayScore += 1;
    }
  }
}

export default HomeRun;