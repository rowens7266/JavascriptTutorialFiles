class Employee{

    setEmployeeDetails(name,id,phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;

    }
}

let emp1 = new Employee();

emp1.setEmployeeDetails('John')
