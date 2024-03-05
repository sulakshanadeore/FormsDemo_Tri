import { Component } from '@angular/core';
import { Country } from '../country';
import { Person } from 'src/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  firstname:string;
  lastname:string;
  maritalStatus:boolean;
  gender:string;
  country:string;
  email:string;

  personData:Person[]=[];


   s:string;
  countryList:Country[]=[
    new Country("1","India"),
    new Country("2","US"),
    new Country("3","UK")
  ];


OnSubmit(contactForm){
  console.log(contactForm.value);
  let p=new Person(contactForm.value.firstname,contactForm.value.lastname,contactForm.value.gender,contactForm.value.isMarried,"India",contactForm.value.email);
  //p.saveData(p);
  this.personData.push(p);

  console.log("saved successfully.....");

  
}

callArrayToDisplay()
{
 
  for (var pdata of this.personData) {
    console.log(pdata.firstname);
}


}


ShowDataInPersonArray(value,index,array)
{

this.s+=value.firstname + "<br/>";
console.log(this.s);
}
}