import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
designations=["Manager","Clerk","HRMgr"];
empObj:Employee;

Empid:number;
Empname:string;
EmpDesig:string;


submitStatus=false;

onSubmit(empForm){
this.submitStatus=true;
console.log(empForm.value.Empid);
console.log(empForm.value.Empname);
console.log(empForm.value.EmpDesig);
this.empObj=new Employee(empForm.value.Empid,empForm.value.Empname,empForm.value.EmpDesig);


// console.log(empForm.value);
// console.log(empForm.value.empObj.EmpDesig);
}

callShowData()
{
this.empObj.showData();

}



// getData(){
// return JSON.stringify(this.empObj);

// }

}
