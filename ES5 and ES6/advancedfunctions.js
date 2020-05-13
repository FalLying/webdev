const first = () =>{
    const greet = 'Hi';
    const second = () =>{
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures


// Currying
const multipy = (a, b) => a+b;
const curriedMutiply = (a)=>(b)=>a*b;
curriedMutiply(3)(4);

// Composer
const composer = (f, g) => (a) => f(g(a));

// avoiding side effects, functional purity