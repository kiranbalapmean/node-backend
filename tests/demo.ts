let a:any;
a = 10;
//console.log(a);


let message: string = "Hello, World!";
message = "kiran";
//console.log(message);

const b :number = 10;
//console.log(b);


function example() {
    let localVar: number = 42;
    console.log(localVar);
}
//example();

//---------------------------------------
class Employee {
    salary: number = 50000;
    name :any = "kiran";

    printName():string{
        return this.name;
    }
    printSalary():number{
        return this.salary;
       
    }
}

// const e = new Employee();
// console.log("Employee Name : "+ e.printName());
// console.log("Employee Salary : "+ e.printSalary());

//-----------------------------------------------------

interface employee {
    "name":string,
    'salary': number,
    'department':string
}

const user : employee = {
    "name":'kiran',
    'salary': 500000,
    'department':'IT'
}

//console.log(user.name);

interface manager extends employee{
    "xyz":string
}

const managerData : manager = {
    "name":'kiran',
    'salary': 500000,
    'department':'IT',
    'xyz': "data"
}


// enum CarName {
//     Honda,
//     Toyota,
//     Alto,
//     Swift,
// }
// console.log(CarName);
// console.log("Value of Alto is : "+ CarName.Alto);

// arrow functions

let addition = (num1:number , num2:number): number => {
    return num1+num2;
}

//console.log(addition(10,20));


let getData = (userId : number):{} => {
    return {"name":"kiran"}
}

//console.log(getData(1));

//===============


