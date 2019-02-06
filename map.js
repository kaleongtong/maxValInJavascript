const m = new Map();
m.set('a', 1);
m.set('b',20);
m.set('c',2);


const vals = [...m.values()];
const keys = [...m.keys()];

let max = Math.max(...vals);

let ind = vals.indexOf(max);

console.log(keys[ind]);
