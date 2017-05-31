interface IPerson{
    firstName: String;
    lastName: String;
}

class Person implements IPerson{
    firstName: String;
    lastName: String;

    constructor(firstName: String, lastName: String)
    {
        firstName = firstName;
        lastName = lastName;
    }
}

class Student extends Person{
    fullName: String;
    middleInitial: String;
    
    constructor(firstName: String, middleInitial: String, lastName: String)
    {
        super(firstName, lastName);
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let enPerson = new Student("Jane", "S.", "Tudent");

let button = document.createElement('button');
button.textContent = "Click me";
button.onclick = function() {
    alert(enPerson.fullName);
}

document.body.appendChild(button);