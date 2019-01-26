let RecordRuns = (obj1, obj2) => {

  // add homeplate score to total score and reset 0)
  let score = obj1.homePlate;
  obj1.homePlate = 0;

  if(obj2.currentSide === 'home'){
    return obj2.homeScore += score;
  } else {
    return obj2.awayScore += score;
  }

}

export default RecordRuns;