import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Student } from '../student';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  public student: Student = <any>{}; 

  constructor(private service: SchoolService) { }

  getStudents()
  {
    this.service.getAllStudents().subscribe(data => {
      this.students = data;
    }, error => {
      console.log("error");
    })
  }

  onDelete(id: number){
    this.service.deleteStudent(id).subscribe(data => {
       this.getStudents();
    })
  }

  onCreate(){
    this.service.createStudent(this.student).subscribe(data => {
      console.log('inserted data');
      this.getStudents();
    })
  }

  onUpdate(id: number){
    this.service.updateStudent(id, this.student).subscribe(data => {
      console.log('updated data');
      this.getStudents();
    })
  }

  onEdit(id: number){
    this.service.getStudentById(id).subscribe(data => {
      this.student = data;
      console.log(data);
    })
  }
    
  ngOnInit(): void {
   this.getStudents(); 
  }
}
