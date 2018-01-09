import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-student', 
	templateUrl: './student.component.html', 
	styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	btnText: string = 'Add Student';
	
	studentObject:Object = {};
	studentDataset = [];

	constructor() {}
	ngOnInit() {

	}

	addItem() {
		this.studentDataset.push(this.studentObject);
		console.log(this.studentDataset);
	}
}
