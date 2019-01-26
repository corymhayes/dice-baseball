let Triple = (obj) => {
  if(obj.firstBase === 1 && obj.secondBase === 1 && obj.thirdBase === 1){
    obj.firstBase = 0;
    obj.secondBase = 0;
    obj.thirdBase = 1;
    obj.homePlate = 3;
  } else if(obj.firstBase === 1 && obj.thirdBase === 1){
    obj.firstBase = 0;
    obj.thirdBase = 1;
    obj.homePlate = 1;
  } else if(obj.secondBase === 1 && obj.thirdBase === 1){
    obj.firstBase = 0;
    obj.secondBase = 1;
    obj.thirdBase = 0;
    obj.homePlate = 2;
  } else if(obj.firstBase === 1 && obj.secondBase === 1){
    obj.firstBase = 0;
    obj.secondBase = 0;
    obj.thirdBase = 1;
    obj.homePlate = 2;
  } else if(obj.thirdBase === 1){
    obj.homePlate = 1;
  } else if(obj.secondBase === 1){
    obj.secondBase = 0;
    obj.thirdBase = 1;
    obj.homePlate = 1;
  } else if(obj.firstBase === 1){
    obj.firstBase = 0;
    obj.thirdBase = 1;
    obj.homePlate = 1;
  } else {
    obj.thirdBase = 1;
  }

  return obj;
}

export default Triple;