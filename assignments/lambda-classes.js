// CODE here for your Lambda Classes
class Person {
    constructor({ name, age, location, gender }) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor({
        specialty,
        favLanguage,
        catchPhrase,
        name,
        age,
        location,
        gender
    }) {
        super({ name, age, location, gender });
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    addPoints(student) {
        let points = Math.floor(Math.random() * 10)
        student.grade += points

        if (student.grade > 70) {
            return `${student.name} is ready to graduate.`
        }
        
        return `${student.name}'s current grade is: ${student.grade}`
    }
}


class Student extends Person {
    constructor({
        previousBackground,
        className,
        favSubject,
        name,
        age,
        location,
        gender,
        grade = undefined
    }) {
        super({ name, age, location, gender });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubject = favSubject;
        this.grade = grade
    }

    listsSubjects() {
        return this.favSubject.map((item , index) => `Favorite Subject ${index + 1}: ${item}`)
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor({
        gradClassName,
        favInstructor,
        specialty,
        favLanguage,
        catchPhrase,
        name,
        age,
        location,
        gender
    }) {
        super({ name, age, location, gender });
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    standUp(channel) {
        return `${
            this.name
        } announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return`${this.name} debugs ${student.name}'s code on ${subject}`
    }

    addPoints(student) {
        return super.addPoints(student)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const tom = new Student({
    name: 'Tom',
    location: 'Hillcamp',
    age: 37,
    gender: 'male',
    previousBackground: 'Pilot',
    className: 'CS1000',
    favSubject: ['React', 'Node.js'],
    grade: 50
});

const john = new ProjectManager({
    name: 'John',
    location: 'Hilltop',
    age: 37,
    gender: 'male',
    gradClassName: 'Purple Scissors',
    favInstructor: 'Dan Abramov',
    specialty: ['React', 'Node.js', 'Express'],
    favLanguage: 'JavaScript',
    catchPhrase: 'This too shall pass.'
});

