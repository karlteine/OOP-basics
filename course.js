class Course {
    constructor(name) {
      this.name = name;
      this.grades = [];
    }
  
    getGrades() {
      return this.grades;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return -1;
      }
      const sum = this.grades.reduce((acc, grade) => acc + grade.grade, 0);
      return sum / this.grades.length;
    }
  
    description() {
      return `Course: ${this.name}`;
    }
  
    addGrade(student, grade) {
        this.grades.push({ student: student.name, grade });
      }
  }
  
  module.exports = Course;
  