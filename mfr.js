// const a = [1, 2, 3, 4, 5];
// const b = a.map(a => a * 2);
// const b=a.filter(a=>a>=3);
// const b= a.reduce((a,b)=>a+b,0)
// console.log(b)

const a = { a: 1, b: 2, c: 3 };
const b =Object.fromEntries(Object.entries(a).map(([key, value]) => [key, value * 2]));
const c =Object.fromEntries(Object.entries(a).filter(([key, value]) => value>=2));
const d=Object.entries(a).reduce((total, [key, value]) => {return total + value;}, 0);
console.log(d)