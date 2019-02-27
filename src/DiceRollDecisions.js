import Single from './Plays/Single';
import Walk from './Plays/Walk'
import DoublePlay from './Plays/DoublePlay';
import HomeRun from './Plays/HomeRun';
import Double from './Plays/Double';
import AutoOut from './Plays/AutoOut';
import Triple from './Plays/Triple';
import SacFly from './Plays/SacFly';
import SingleWithRunners from './Plays/SingleWithRunners'



let DiceRollDecisions = (dice1,dice2,obj1, obj2) => {

  if(dice1 === 1 && dice2 === 1){
    HomeRun(obj1, obj2);
    return "Home Run";
  }

  if((dice1 === 1 && dice2 === 2) || (dice1 === 2 && dice2 === 1)){
    Double(obj1, obj2)
    return "Double";
  }

  if((dice1 === 1 && dice2 === 3) || (dice1 === 3 && dice2 === 1)){
    AutoOut(obj1, obj2);
    return "Fly Out";
  }

  if((dice1 === 1 && dice2 === 4) || (dice1 === 4 && dice2 === 1)){
    Walk(obj1, obj2)
    return "Walk";
  }

  if((dice1 === 1 && dice2 === 5) || (dice1 === 5 && dice2 === 1)){
    AutoOut(obj1, obj2);
    return "Pop Out";
  }

  if((dice1 === 1 && dice2 === 6) || (dice1 === 6 && dice2 === 1)){
    Single(obj1, obj2);
    return "Single"
  }

  if(dice1 === 2 && dice2 === 2){
    DoublePlay(obj1, obj2);
    return "Double Play";
  }

  if((dice1 === 2 && dice2 === 3) || (dice1 === 3 && dice2 === 2)){
    AutoOut(obj1, obj2);
    return "Ground Out";
  }

  if((dice1 === 2 && dice2 === 4) || (dice1 === 4 && dice2 === 2)){
    AutoOut(obj1, obj2);
    return "Out";
  }

  if((dice1 === 2 && dice2 === 5) || (dice1 === 5 && dice2 === 2)){
    SingleWithRunners(obj1, obj2)
    return "Single runners advance";
  }

  if((dice1 === 2 && dice2 === 6) || (dice1 === 6 && dice2 === 2)){
    AutoOut(obj1, obj2);
    return "Out";
  }

  if(dice1 === 3 && dice2 === 3){
    Walk(obj1, obj2);
    return "Walk";
  }

  if((dice1 === 3 && dice2 === 4) || (dice1 === 4 && dice2 === 3)){
    Single(obj1, obj2);
    return "Single"
  }

  if((dice1 === 3 && dice2 === 5) || (dice1 === 5 && dice2 === 3)){
    AutoOut(obj1, obj2);
    return "Ground Out";
  }

  if((dice1 === 3 && dice2 === 6) || (dice1 === 6 && dice2 === 3)){
    AutoOut(obj1, obj2);
    return "Fly Out";
  }

  if(dice1 === 4 && dice2 === 4){
    Walk(obj1, obj2);
    return "Walk";
  }

  if((dice1 === 4 && dice2 === 5) || (dice1 === 5 && dice2 === 4)){
    AutoOut(obj1, obj2);
    return "Pop Out";
  }

  if((dice1 === 4 && dice2 === 6) || (dice1 === 6 && dice2 === 4)){
    AutoOut(obj1, obj2);
    return "Out";
  }

  if(dice1 === 5 && dice2 === 5){
    AutoOut(obj1, obj2);
    return "Strike Out";
  }

  if((dice1 === 5 && dice2 === 6) || (dice1 === 6 && dice2 === 5)){
    SacFly(obj1, obj2);
    return "Sac Fly, runners advance";
  }

  if(dice1 === 6 && dice2 === 6){
    Triple(obj1, obj2);
    return "Triple";
  }
  
}

export default DiceRollDecisions;