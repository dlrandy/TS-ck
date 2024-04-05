let aNumber = 2;

let anotherNumber: number = 3;

type APerson = {
  name: string;
  age: number;
};
const me: APerson = createPerson();

function createPerson(): APerson {
  return { name: "Eric", age: 34, d: 23 };
}

function printPerson(person: APerson) {
  console.log("====================================");
  console.log(person.name, person.age);
  console.log("====================================");
}
printPerson(me);

function createAperson() {
  return { name: "stefan", age: 34 };
}

const mee = createAperson();

printPerson(mee);

type AUser = {
  name: string;
  age: number;
  id: number;
};

const user: AUser = {
  name: "stefan",
  age: 23,
  id: 33,
};

printPerson(user);
printPerson({
  name: "stefan",
  age: 23,
  id: 33,
});
var a = {
  name: "stefan",
  age: 23,
  id: 33,
};
printPerson(a);

type Studying = {
  semester: number;
};
type Student = {
  id: string;
  age: number;
  semester: number;
};
function createPersonn() {
  return { name: "Stefan", age: 39, semester: 25, id: "XPA" };
}
function printPersonn(person: APerson) {
  console.log(person.name, person.age);
}
function studyForAnotherSemester(student: Studying) {
  student.semester++;
}
function isLongTimeStudent(student: Student) {
  return student.age - student.semester / 2 > 30 && student.semester > 20;
}
const mem = createPersonn();
// All work!
printPersonn(me);
studyForAnotherSemester(mem);
isLongTimeStudent(mem);

const name: any = "Stefan";
const person: any = { name: "Stefan", age: 40 };
const notAvailable: any = undefined;

const namee: any = "Stefan";
// This is ok for TypeScript, but will crash in JavaScript
console.log(namee.profession.experience[0].level);
const mme: any = "Stefan";
// Good!
const mname: string = mme;
// Bad, but ok for the type system.
const mage: number = mme;

function pprintPerson(person: APerson) {
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    // Element implicitly has an 'any' --^
    // type because expression of type 'string'
    // can't be used to index type 'Person'.
    // No index signature with a parameter of type 'string'
    // was found on type 'Person'.(7053)
  }
}

function pppprintPerson(person: APerson) {
  for (let key in person) {
    console.log(`${key}: ${person[key as keyof APerson]}`);
    // Element implicitly has an 'any' --^
    // type because expression of type 'string'
    // can't be used to index type 'Person'.
    // No index signature with a parameter of type 'string'
    // was found on type 'Person'.(7053)
  }
}

const mnne: unknown = "Stefan";
const nnname: string = mnne as string;
const annge: number = mnne;
function doSomething(value: unknown) {
  if (typeof value === "string") {
    // value: string
    console.log("It's a string", value.toUpperCase());
  } else if (typeof value === "number") {
    // value: number
    console.log("it's a number", value * 2);
  }
}

let obj: {}; // Similar to Object
obj = 32;
obj = "Hello";
obj = true;
obj = () => {
  console.log("Hello");
};
obj = undefined; // Error
obj = null; // Error
obj = { name: "Stefan", age: 40 };
obj = [];
obj = /.*/;

let okObj: {} = {
  toString() {
    return false;
  },
}; // OK
let obj: Object = {
  toString() {
    return false;
  },
};

const person4 = ["Stefan", 40];
const [aa, ab] = person4;

const person44: [string, number] = ["Stefan", 40];
const [a4, b4] = person44;

person44[1] = 41; // OK!
person44[2] = false; // Error

type Person4 = [name: string, age: number];

function hello(name: string, msg: string): void {
  // ...
}
function hello1(...args: [name: string, msg: string]): void {
  // ...
}

function hello2(...args: [string, string]): void {
  // ...
}

type PersonAsType = {
  name: string;
  age: number;
  address: string[];
  greet(): string;
};
interface PersonAsInterface {
  name: string;
  age: number;
  address: string[];
  greet(): string;
}

interface Person44 {
  name: string;
}
interface Person44 {
  age: number;
}
var vv: Person44 = {
  name: "",
  age: 33,
};

// interface FormData {
//     name: string;
//     age: number;
//     address: string[];
//     }
//     // A function that sends this data to a backend
//     function send(data: FormData) {
//     console.log(data.entries()) // this compiles!

//     // but crashes horrendously in runtime
//     }

type FormData = {
  name: string;
  age: number;
  address: string[];
};

type CallbackFn = () => void;
function task(name: string, dependencies: string[]): void;
function task(name: string, callback: CallbackFn): void;
function task(name: string, dependencies: string[], callback: CallbackFn): void;
// The actual implementation
function task(
  name: string,
  param2: string[] | CallbackFn,
  param3?: CallbackFn
): void {
  //...
}
const author = {
    name: "Stefan",
    // function shorthand
    hi() {
    console.log(this.name);
    },
    };

    const button = document.querySelector("button");
    button?.addEventListener("click", handleToggle);
    function handleToggle(this: HTMLButtonElement) {
    this.classList.toggle("clicked");
    }

    handleToggle();
    type ToggleFn = typeof handleToggle;
    // (this: HTMLElement) => void
    type WithoutThis = OmitThisParameter<ToggleFn>
    // () = > void
    type ToggleFnThis = ThisParameterType<ToggleFn>
    // HTMLElement

    const TITLE = Symbol('title')


