import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  public teachers: Teacher[] = [];
  public teacher: Teacher = <any>{};

  constructor(private service: SchoolService) { }

  getAllTeachers(){
    this.service.getAllTeachers().subscribe( data => {
      this.teachers = data;
    }, error => {
      console.log("error");
    })
  }

  onCreate(){
    this.service.createTeacher(this.teacher).subscribe(data => {
      console.log('inserted data');
      this.getAllTeachers();
    })
  }

  onUpdate(id: number){
    this.service.updateTeacher(id, this.teacher).subscribe(data => {
      console.log('updated data');
      this.getAllTeachers();
    })
  }

  onDelete(id : number){
    this.service.deleteTeacher(id).subscribe( data => {
      this.getAllTeachers();
    })
  }

  onEdit(id : number){
    this.service.getTeacherById(id).subscribe(data => {
      this.teacher = data;
      console.log(data);
    })
  }
  ngOnInit(): void {
    this.getAllTeachers();
  }

}
