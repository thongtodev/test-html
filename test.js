let arr = [
  {name:'Geats', age:1000},
  {name: 'Buffa', age:24},
  {name: 'Nago', age:18}
]

let filter = arr.filter((item, index) => {
  return item && item.age === 1000;
});

let find = arr.find((item, index) => {
  return item && item.age === 24;
});
console.log(`found`, find);
console.log(`found`,filter);
