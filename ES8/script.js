// .padStart();
// .padEnd();

// list
const fun = (a,b,c,d,) =>{
    console.log(a);
}
fun(1,2,3,4,);

// objects

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username3: 'Jonas'
}

Object.keys(obj). forEach((key, index)=>{
    console.log(key, obj[key]);
});

Object.values(obj). forEach(value =>{
    console.log(value);
});

Object.entries(obj). forEach(value =>{
    console.log(value);
});