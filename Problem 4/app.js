// Q4. how to implement class ?

//creating class
class NameOfClass {
  constructor() {
    // constructor
    this.firstName = "Jai prakash";
    this.lastName = "Rankawat";
  }
  Greet() {
    return `Good Morning ${this.firstName}`;
  }
}

let myClass = new NameOfClass(); // creating object of class
console.log(myClass); //NameOfClass { firstName: 'Jai prakash', lastName: 'Rankawat' }
console.log(myClass.firstName); // jai prakash
console.log(myClass.lastName); // Rankawat
console.log(myClass.Greet()); // calling function from class
