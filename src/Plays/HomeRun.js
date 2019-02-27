let HomeRun = (obj1, obj2) => {


  let numOfRunners = Object.values(obj1).reduce(
    (acc, cur) => acc + cur, 0
  );

  console.log(numOfRunners)

  obj1.firstBase = 0;
  obj1.secondBase = 0;
  obj1.thirdBase = 0;

  if(obj2.currentSide === 'home'){
    obj2.runs += numOfRunners;
  } else {
    obj2.runs += numOfRunners;
  }
}

export default HomeRun;