var Student = /** @class */ (function () {
    function Student(_name, birthDate, _desc) {
        this._name = _name;
        this.birthDate = birthDate;
        this._desc = _desc;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.consoleLog = function () {
        console.log("Name: " + this._name + ", birthDate: " + this.birthDate + ", desc: " + this._desc);
    };
    Student.prototype.createHTMLDesc = function () {
        return "<p>Name: <strong>" + this._name + "</strong> BirthDate: <strong>" + this.birthDate + "</strong> Description: <strong>" + this._desc + "</strong></p>";
    };
    return Student;
}());
var Group = /** @class */ (function () {
    function Group(studentsList) {
        this.studentsList = studentsList;
    }
    Group.prototype.getStudent = function (index) {
        return this.studentsList[index];
    };
    Group.prototype.createStudentsListHTML = function () {
        var result = "";
        for (var _i = 0, _a = this.studentsList; _i < _a.length; _i++) {
            var student = _a[_i];
            result += "<p class=\"student\">Name: <strong>" + student.name + "</strong></p>";
        }
        return result;
    };
    return Group;
}());
var student1 = new Student("Seba", "12-12-1995", "Opis studenta");
var student2 = new Student("Seba", "12-12-1995", "Opis studenta");
var student3 = new Student("Seba", "12-12-1995", "Opis studenta");
var studentsGroup = new Group([student1, student2, student3]);
var listDiv = document.getElementById("lista");
if (listDiv != null) {
    console.log("Listdiv not null");
    listDiv.innerHTML = studentsGroup.createStudentsListHTML();
}
