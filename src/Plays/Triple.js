let Triple = (obj1, obj2) => {
  if(obj1.firstBase === 1 && obj1.secondBase === 1 && obj1.thirdBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 0;
    obj1.thirdBase = 1;
    obj2.runs += 3;
  } else if(obj1.firstBase === 1 && obj1.thirdBase === 1){
    obj1.firstBase = 0;
    obj1.thirdBase = 1;
    obj2.runs += 2;
  } else if(obj1.secondBase === 1 && obj1.thirdBase === 1){
    obj1.secondBase = 0;
    obj1.thirdBase = 1;
    obj2.runs += 2;
  } else if(obj1.firstBase === 1 && obj1.secondBase === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 0;
    obj1.thirdBase = 1;
    obj2.runs += 2;
  } else if(obj1.thirdBase === 1){
    obj2.runs += 1;
  } else if(obj1.secondBase === 1){
    obj1.secondBase = 0;
    obj1.thirdBase = 1;
    obj2.runs += 1;
  } else if(obj1.firstBase === 1){
    obj1.firstBase = 0;
    obj1.thirdBase = 1;
    obj2.runs += 1;
  } else {
    obj1.thirdBase = 1;
  }

  return obj1;
}

export default Triple;