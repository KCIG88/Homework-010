// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {

    constructor(name, id, email, School) {
        super(name, id, email, School)
        this.School = School
    }
    getSchool(){
    return this.School
}
getRole(){
    return "Intern"
}
}

module.exports = Intern;