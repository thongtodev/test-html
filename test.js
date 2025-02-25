let arr = [
  {name:'Geats', age:1000},
  {name: 'Buffa', age:24},
  {name: 'Nago', age:18}
]

let map = arr.map((item, index) => {
  console.log(`${item.name} age is ${item.age}`);
})

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let mapNum = arrNum.map((item, index) => {
  item = item * item;
  return item;
})
console.log(`check value arr: ${arrNum}`);
console.log(`check value mapNum:`, mapNum);