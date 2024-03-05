export class Person {
    firstname:string;
    lastname:string;
  gender:string;
  isMarried:boolean;
  country:string; 
  email:string;


    constructor(firstname:string, lastname:string,gender:string,isMarried:boolean,country:string,email:string) {
      this.firstname=firstname;
      this.lastname=lastname;
  this.gender=gender;
  this.isMarried=isMarried;
  this.country=country;
  this.email=email;
    }



    saveData(obj:Person)
    {
console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj.gender);
console.log(obj.isMarried);
console.log(obj.country);
console.log(obj.email);

    }


  }