"use strict";

class Controller {
    constructor(firstname, lastname, age, slogan) {
        this.model = new User(firstname, lastname, age, slogan);
    }
}

class User {
    slogan = "We love our users"
    constructor(firstname, lastname, age, slogan) {
        this.fname = firstname;
        this.lname = lastname;
        this.age = age;
        this.bio = function(){
            return `${this.fname} ${this.lname} is ${this.age} years old. `;
        }
        this.bioSlogan = this.bio() + " And as always " + `"${slogan || this.slogan}"`;
    }
}   

const user1 = new Controller("naruto", "uzumaki", 34, "I'll became Hokage");
console.log(user1.model.bioSlogan);