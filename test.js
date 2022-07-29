let x = new Date().getTime();

let z;
setTimeout(()=> {
    z = new Date().getTime();
    console.log(z);
    console.log(z - x);
}, 500);

console.log(x);
