/**
 * Write your School Class Code in this file
 */

class School {
  constructor(name) {
    // Private properties
    this._name = name;
    this._students = [];
    this._teachers = [];
  }

  // Method to retrieve the count of all students in the school
  getStudentCount() {
    return this._students.length;
  }

  // Method to expel a student
  expelStudent(studentId) {
    this._students = this._students.filter((student) => student.id !== studentId);
  }

  // Method to get a teacher by the teacher ID
  getTeacherById(teacherId) {
    return this._teachers.find((teacher) => teacher.id === teacherId);
  }

  // Method to get the name of the school
  getSchoolName() {
    return this._name;
  }
}

module.exports = School;
