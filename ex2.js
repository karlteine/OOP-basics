class Person {
    constructor() {
      this.firstname = "";
      this.lastname = "";
      this.age = 0;
    }
  }
  
  class Student {
    constructor(firstname, lastname, age) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
    }
  }
  
  const person1 = new Person();
  person1.firstname = "John";
  person1.lastname = "Doe";
  person1.age = 25;
  
  const person2 = new Person();
  person2.firstname = "Jane";
  person2.lastname = "Smith";
  person2.age = 30;
  
  const person3 = new Person();
  person3.firstname = "Bob";
  person3.lastname = "Johnson";
  person3.age = 22;
  
  const student1 = new Student("Alice", "Johnson", 21);
  const student2 = new Student("Charlie", "Brown", 23);
  const student3 = new Student("Eva", "Williams", 19);
  
  console.log("Person 1:", person1);
  console.log("Person 2:", person2);
  console.log("Person 3:", person3);
  
  console.log("Student 1:", student1);
  console.log("Student 2:", student2);
  console.log("Student 3:", student3);
  