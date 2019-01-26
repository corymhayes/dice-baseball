import Double from './Double';

let SingleWithRunners = (obj1, obj2) => {
  if(obj1.firstBase !== 0){
    Double(obj1);
  } else {
    obj1.firstBase = 1;
  }

  
  return obj1;
}

export default SingleWithRunners;