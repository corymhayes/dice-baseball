
let Single = (a) => {
  if(a.firstBase === 1 && a.secondBase === 1 & a.thirdBase === 1){
    a.firstBase = 1;
    a.secondBase = 1;
    a.thirdBase = 1;
    a.homePlate = 1;
  } else if(a.firstBase === 1 && a.thirdBase === 1){
    a.firstBase = 1;
    a.secondBase = 1;
    a.thirdBase = 1;
    a.homePlate = 0;
  } else if(a.secondBase === 1 && a.thirdBase === 1){
    a.firstBase = 1;
    a.secondBase = 1;
    a.thirdBase = 1;
    a.homePlate = 0;
  } else if(a.firstBase === 1 && a.secondBase === 1){
    a.firstBase = 1;
    a.secondBase = 1;
    a.thirdBase = 1;
    a.homePlate = 0;
  } else if(a.thirdBase === 1){
    a.firstBase = 1;
    a.thirdBase = 1;
  } else if(a.secondBase === 1){
    a.firstBase = 1;
    a.secondBase = 1;
  } else if(a.firstBase === 1){
    a.firstBase = 1;
    a.secondBase = 1;
  } else {
    a.firstBase = 1;
  }

  return a;
}

export default Single;