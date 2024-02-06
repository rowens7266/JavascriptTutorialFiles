/* Arithmetic Operations */

// let x = 5;
// let y = 2;

// let result = x ** y;

// console.log('Result is : ' + result);

// let age = 20;
// if (age == 21){
//     console.log('congrats')
// }
// else if(age >= 30){
//     console.log('been eligible to drive for a long time')
// }
// else{
//     console.log('Sorry you are not eligible to get a licese')
// }


let starRating = 6;

switch (starRating) {
    case 1:
        console.log('rating is bad');
        break;
    case 2:
        console.log('rating is fair');
        break;
    case 3:
        console.log('rating is average');
        break;
    case 4:
        console.log('rating is good');
        break;
    case 5:
        console.log('rating is excellent');
        break;


    default:
        console.log('please enter a valid rating value from 1 - 5');
        break;
}