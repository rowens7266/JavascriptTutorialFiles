let i;

for(i = 1; i < 5; i++){

    console.log('value of i is: ' + i);
}

let fruits= ['Apples', 'Banana', 'Grapes'];
let x;
for(x in fruits){
    console.log(fruits[x])
}

for(x of fruits){
    console.log(x);
}