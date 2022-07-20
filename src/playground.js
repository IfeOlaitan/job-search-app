// const sushi = [
//   "Tuna",
//   "Salmon",
//   "Yellowtail",
//   "Eel",
//   "Shrimp",
//   "Octopus",
//   "Uni",
// ];
//
// console.log(sushi.slice(2, 5));

//?Sets
/*
const numbers = new Set();

numbers.add(5);
numbers.add(10);
numbers.add(5);
numbers.add(15);

console.log(numbers);
*/

const { ref, computed, reactive, toRefs }  = require("vue");

//?Reactivity
//Number
/*
let a = ref(1);
let b = ref(2);
let c = computed(() => a.value + b.value);
console.log(c.value);

a.value = 10;
console.log(c.value);
 */

//String
/*
const name = ref("ife");
const job = ref("ux dev");
const title = computed(() => name.value + ' ' + job.value);
console.log(title.value);

name.value = 'olaitan';
console.log(title.value);
 */

//Object
const person = reactive({
  firstName: 'Ifeoluwa',
  lastName: 'Olaitan'
});
// const {firstName, lastName} = toRefs(person);
// const title = computed(() => `${firstName.value} ${lastName.value} the Great!`);
//
// person.firstName = 'Ayo';
// console.log(title.value);
//
// person.firstName = 'Dele';
// console.log(title.value);

const refPerson = toRefs(person);
console.log(person.firstName);





