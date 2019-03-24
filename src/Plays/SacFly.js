let SacFly = (obj1, obj2) => {
    if(obj1.firstBase === 1 && obj1.secondBase === 1 && obj1.thirdBase === 1){
      obj1.firstBase = 0;
      obj2.runs += 1;
      obj2.outs += 1;
    } else if(obj1.firstBase === 1 && obj1.thirdBase === 1){
      obj1.firstBase = 0;
      obj1.secondBase = 1;
      obj1.thirdBase = 0;
      obj2.runs += 1;
      obj2.outs += 1;
    } else if(obj1.secondBase === 1 && obj1.thirdBase === 1){
      obj1.secondBase = 0;
      obj2.runs += 1;
      obj2.outs += 1;
    } else if(obj1.firstBase === 1 && obj1.secondBase === 1){
      obj1.firstBase = 0;
      obj1.thirdBase = 1;
      obj2.outs += 1;
    } else if(obj1.thirdBase === 1){
      obj1.thirdBase = 0;
      obj2.runs += 1;
      obj2.outs += 1;
    } else if(obj1.secondBase === 1){
      obj1.secondBase = 0;
      obj1.thirdBase = 1;
      obj2.outs += 1;
    } else if(obj1.firstBase === 1){
      obj1.firstBase = 0;
      obj1.secondBase = 1;
      obj2.outs += 1;
    } else {
      obj2.outs += 1;
    }
}

export default SacFly;