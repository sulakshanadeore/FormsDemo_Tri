export class Employee {
Empid:number;
Empname:string;
EmpDesig:string;

    constructor(empid:number,empname:string,desig:string){
     this.Empid=empid;
     this.Empname=empname;
     this.EmpDesig=desig;
        
    }

    showData()
    {

console.log("Showing data from the class");
console.log(this.Empid);
console.log(this.Empname);
console.log(this.EmpDesig);

    }


}
