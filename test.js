var arr =[
  {name:'Geats',power:10000},
  {name:'Buffa',power:8000},
  {name:'Nago',power:6000},
  {name:'Tycoon',power:1000}
];
arr.sort(function(a, b) {
  return b.power - a.power;
})

console.log(`check power after sort:`,arr);
