function Employee (name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    let monthlyBonus = 1000;
    
    let calculateMonthlyBonus = function(){
        let finalSalary = this.baseSalare + monthlyBonus;
        console.log('Final salary is : '+finalSalary);
    } 

    this.getEmployeeDetails = function(){
        console.log ('Name: '+this.name + ' | Age : ' +this.age);

    }
}

let emp1 = new Employee('John',25,2000);
