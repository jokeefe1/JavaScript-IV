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
}

class Student extends Person {
    constructor({
        previousBackground,
        className,
        favSubject,
        name,
        age,
        location,
        gender
    }) {
        super({ name, age, location, gender });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubject = favSubject;
    }

    listsSubjects() {
        const result = this.favSubject.forEach(subject => subject);
        return result;
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
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
        return;
        `${this.name} announces to ${channel}, @channel standy times debugs ${
            student.name
        }'s code on ${subject}`;
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
    favSubject: ['React', 'Node.js']
});

// previousBackground,
// className,
// favSubject,
// name,
// age,
// location,
// gender

console.log(fred.speak());
console.log(tom.listsSubjects());
