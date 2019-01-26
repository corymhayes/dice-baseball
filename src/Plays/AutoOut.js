import RecordOuts from './RecordOuts'

let AutoOut = (obj1, obj2) => {
  obj2.outs += 1;

  RecordOuts(obj1, obj2);
}

export default AutoOut;