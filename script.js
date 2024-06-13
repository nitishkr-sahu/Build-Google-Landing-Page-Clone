let key = "name";



const boolean = new Boolean("true");
// console.log(typeof boolean);
// console.log(typeof new Number(5))
// console.log(`string : ${typeof new String("nitihs")}`)
// checking false value
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean([]))

// object refer as single entity which store multiple key value pair

const person = {
  name: "nitish",
  age: 24,
  sex: "male"
}

// object desctructuring....
const person1 = { ...person, name: "bantu" }
console.log(person1);