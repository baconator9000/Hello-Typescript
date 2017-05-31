var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(firstName, lastName) {
        firstName = firstName;
        lastName = lastName;
    }
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(firstName, middleInitial, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.fullName = firstName + " " + middleInitial + " " + lastName;
        return _this;
    }
    return Student;
}(Person));
var enPerson = new Student("Jane", "S.", "Tudent");
var button = document.createElement('button');
button.textContent = "Click me";
button.onclick = function () {
    alert(enPerson.fullName);
};
document.body.appendChild(button);
