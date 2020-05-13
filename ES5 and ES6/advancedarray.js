var array = [1,2,10,16];

const double = [];
const newArray = array.forEach((num)=>{
    double.push(num * 2);
});

console.log(newArray);

// map, filter, reduce
const mapArray = array.map((num)=>{
    return num * 2;
})

const mapArray2 = array.map(num => num * 2);

// filter
const filterArray = array.filter(num =>  num > 5);

// recude

const reduceArray = array.reduce((accu, num)=>{
    return accu + num;
}, 0);