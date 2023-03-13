function printObj (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}

function propInObj (str, obj) {
  return (str in obj);
}

function createObjNoProto() {
  return Object.create(null);
}

const someObj = {
  exist: "Maybe"
}

const meaning = Object.create(someObj);
meaning.life = 'Doubt';

printObj(someObj);
printObj(meaning);
console.log(propInObj('exist', meaning));
const whatTheHell = createObjNoProto();
console.log(whatTheHell);