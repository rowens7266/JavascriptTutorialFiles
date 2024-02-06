let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;

}

EmpDetails.prototype.getName = function(){
    return this.getName;
}

EmpDetails.prototype.getAge = function(){
    return this.getAge;
}

let Employee1 = new EmpDetails('Jeff', 30);
let Employee2 = new EmpDetails('Phil', 40);

console.log(Employee1.name);
console.log(Employee2.age);