
var arr =[
  {subjectId: 1,register: 30},
  {subjectId: 1,register: 40},
  {subjectId: 2,register: 35},
  {subjectId: 2,register: 45}
];
var run = _(arr).groupBy('subjectId').map((item, index) => ({
  subjectId : index,
  register: _.sumBy(item, 'register')
})).value();
console.log(run);

