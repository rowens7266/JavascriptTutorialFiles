function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 1000;

    this.getEmployeeDetails = function(){
        console.log('Name : '+this.name + ' | Age : '+this.age );
        calculateFinalSalary();
    }
    let calculateFinalSalary = function()
    {
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is: '+finalSalary)

    }
}
let emp1 = new Employee('john', 30, 1000);

emp1.getEmployeeDetails();
