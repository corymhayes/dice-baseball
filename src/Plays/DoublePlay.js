import RecordOuts from "./RecordOuts";

let DoublePlay = (obj1, obj2) => {

  let baseKeys = Object.keys(obj1);
  let baseValues = Object.values(obj1);

  if(baseValues.reduce((item, currentItem) => item + currentItem) > 1){
    let currentlyOn = [];
    //find out who is on base
    baseValues.map((item, index) => {
      if(item > 0){
        currentlyOn.push(baseKeys[index])
      }
    });

    //find out which is going to randomly get out
    let playerOut = currentlyOn[Math.floor(Math.random() * (currentlyOn.length - 0)) + 0];
    obj1[playerOut] = 0;
    obj2.outs += 2;

    RecordOuts(obj1, obj2);

    //return the new object array
    return obj1;

  } else if(baseValues.reduce((item, currentItem) => item + currentItem) === 1){
    obj1.firstBase = 0;
    obj1.secondBase = 0;
    obj1.thirdBase = 0;
    obj1.homePlate = 0;
    obj1.outs += 2;
    
    return obj1;
  } else {
    obj1.firstBase = 0;
    obj1.secondBase = 0;
    obj1.thirdBase = 0;
    obj1.homePlate = 0;
    obj1.outs += 1;
    
    return obj1;
  }
}

export default DoublePlay;