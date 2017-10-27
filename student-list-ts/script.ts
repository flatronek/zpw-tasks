class Student {
	constructor(private _name: string, private birthDate: string, private _desc: string) {
	}

	get name(): string {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	public consoleLog() {
		console.log(`Name: ${this._name}, birthDate: ${this.birthDate}, desc: ${this._desc}`);
	}

	public createHTMLDesc(): string {
		return `<p>Name: <strong>${this._name}</strong> BirthDate: <strong>${this.birthDate}</strong> Description: <strong>${this._desc}</strong></p>`
	}
}

class Group {
	constructor(private studentsList: Student[]) {
	}

	public getStudent(index: number) {
		return this.studentsList[index];
	}

	public createStudentsListHTML(): string {
		var result = "";
		for (let student of this.studentsList) {
			result += `<p class="student">Name: <strong>${student.name}</strong></p>`
		}
		return result;
	}
}

let student1 = new Student("Seba", "12-12-1995", "Opis studenta");
let student2 = new Student("Seba", "12-12-1995", "Opis studenta");
let student3 = new Student("Seba", "12-12-1995", "Opis studenta");

let studentsGroup = new Group([student1, student2, student3]);

var studentItems = document.getElementsByClassName("student");
for(var i = 0; i < studentItems.length; i++) {
}

let listDiv = document.getElementById("lista");
if (listDiv != null) {
	console.log("Listdiv not null");
	listDiv.innerHTML = studentsGroup.createStudentsListHTML();
}

