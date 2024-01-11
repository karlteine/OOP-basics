class Person {
    constructor(name) {
      this.name = name;
      this.birthYear = null;
    }
  
    setDateOfBirth(year) {
      this.birthYear = year;
    }
  
    getDateOfBirth() {
      return this.birthYear;
    }
  
    age() {
      if (this.birthYear === null) {
        return -1; // Indicating that birth year is not set
      }
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getName() {
      return this.name;
    }
  
    description() {
      return `Person: ${this.name}`;
    }
  }
  
  module.exports = Person;
  