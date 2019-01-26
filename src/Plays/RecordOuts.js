let RecordOuts = (obj1, obj2) => {
  if(obj2.outs >= 3){
    if(obj2.currentSide === 'home'){
      obj2.currentSide = 'away'
    } else {
      obj2.currentSide = 'home'
      obj2.currentInning += 1
    }
    
    obj2.outs = 0;
    obj1.firstBase = 0;
    obj1.secondBase = 0;
    obj1.thirdBase = 0;
    obj1.homePlate = 0;
  }
}

export default RecordOuts;