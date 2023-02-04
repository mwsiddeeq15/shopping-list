/*

2423
"sdgadfgs"
true false


[1,2,3]
["dfgadf", "sdadfg"]

const personName = "Nasir"
const personAge = 12;

const person2Name = "Me"
const person2Age = 32;

const nameArray = ["Nasir", "Me"]
const ageArray = [12, 32]

const person1 = {
  name: "Nasir",
  age: 12
  father: {
    name: "Me",
    age: 32
  }
}

console.log(person1)

const person2 = {
  name: "Me",
  age: 32
}

const people = [{
  name: "Nasir",
  age: 12
}, {
  name: "Me",
  age: 32
}]

*/

function Button(thePropsReactPasses) {
  const onClick = thePropsReactPasses.hello;
  const style = thePropsReactPasses.yolo;
  const children = thePropsReactPasses.children;

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
