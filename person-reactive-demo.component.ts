import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Person } from 'src/person';
import { Country } from '../country';


@Component({
  selector: 'app-person-reactive-demo',
  templateUrl: './person-reactive-demo.component.html',
  styleUrls: ['./person-reactive-demo.component.css']
})
export class PersonReactiveDemoComponent {

  contactfrm;
  // contactfrm=new FormGroup({
  //     firstname:new FormControl("Gauri"),
  //     lastname:new FormControl(),
  //     maritalStatus:new FormControl(),
  // gender:new FormControl(),
  // country:new FormControl(),
  // email:new FormControl()
  // });

  constructor(private frmbldr:FormBuilder){
    this.contactfrm=this.frmbldr.group({
      firstName:["Harish",[Validators.required,Validators.minLength(4)]],
      lastName:["Sinha",[Validators.required]],
      maritalStatus:["",[]],
  gender:["",[]],
  country:["",[]],
  email:["",[]]
    }

    );
   }

   get firstName(){
return this.contactfrm.get("firstName");

   }

   get lastName()
   {
    return this.contactfrm.get("lastName");
    
   }
  get maritalStatus()
  {
      return this.contactfrm.get("maritalStatus");
  }
  get email(){
  return this.contactfrm.get("email");
   }
   get country(){
   return this.contactfrm.get("country");
   }
        
   countryList:Country[]=[
   new Country("1","India"),
   new Country("2","US"),
   new Country("3","UK")
   ];

  OnSubmit(){
console.log(this.contactfrm.value)

  }



}
