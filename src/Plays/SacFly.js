import Single from './Single';

let SacFly = (obj1, obj2) => {
  Single(obj1, obj2);
  obj2.outs += 1;
  
  return obj1;
}

export default SacFly;