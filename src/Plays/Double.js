let Double = (obj1) => {
  if(obj1.firstBase === 1 && obj1.secondBase === 1 && obj1.thirdBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 1;
    obj1.thirdBase = 1;
    obj1.homePlate = 2;
  } else if(obj1.firstBase === 1 && obj1.thirdBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 1;
    obj1.thirdBase = 1;
    obj1.homePlate = 1
  } else if(obj1.secondBase === 1 && obj1.thirdBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 1;
    obj1.thirdBase = 0;
    obj1.homePlate = 2;
  } else if(obj1.firstBase === 1 && obj1.secondBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 1;
    obj1.thirdBase = 1;
    obj1.homePlate = 1;
  } else if(obj1.thirdBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 1;
    obj1.thirdBase = 0;
    obj1.homePlate = 1;
  } else if(obj1.secondBase === 1){
    obj1.secondBase = 1;
    obj1.homePlate = 1;
  } else if(obj1.firstBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 1;
    obj1.thirdBase = 1;
  } else {
    obj1.secondBase = 1;
  }

  return obj1;
}

export default Double;