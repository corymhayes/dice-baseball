import RecordOuts from "./RecordOuts";

let DoublePlay = (obj1, obj2) => {

  let baseKeys = Object.keys(obj1);
  let baseValues = Object.values(obj1);

  let numOfRunners = baseValues.reduce((item, currentItem) => item + currentItem);

  if(numOfRunners > 1){
    let currentlyOn = [];

    //find out who is on base
    baseValues.map((item, index) => {
      if(item > 0){
        currentlyOn.push(baseKeys[index])
      }

      return currentlyOn;
    });

    //find out which is going to randomly get out
    let playerOutOne = currentlyOn[Math.floor(Math.random() * (currentlyOn.length - 0)) + 0];
    let playerOutTwo = currentlyOn[Math.floor(Math.random() * (currentlyOn.length - 0)) + 0];

    let newPlayerOutTwo = (p1, p2) => {
      if(p1 === p2){
        playerOutTwo = currentlyOn[Math.floor(Math.random() * currentlyOn.length)];
        newPlayerOutTwo(p1, playerOutTwo);
      } else {
        return p2;
      }
    }
  
    newPlayerOutTwo(playerOutOne, playerOutTwo);

    obj1[playerOutOne] = 0;
    obj2[playerOutTwo] = 0;
    obj2.outs += 2;

    RecordOuts(obj1, obj2);

    //return the new object array
    // return obj1;

    obj1.batter = 1;

  } else {
    obj1.firstBase = 0;
    obj1.secondBase = 0;
    obj1.thirdBase = 0;
    obj1.homePlate = 0;
    obj2.outs += 1;

    RecordOuts(obj1, obj2);
    
    return obj1;
  }
}

export default DoublePlay;