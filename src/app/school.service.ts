import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from './teacher';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private headers: HttpHeaders;
  private URL: string = "http://localhost:3350/api/";

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  
  getAllStudents(){
    return this.http.get<Student[]>(this.URL + "students");
  }

  getAllTeachers(){
    return this.http.get<Teacher[]>(this.URL + "teachers");
  }

  createStudent(student: Student){
    var result = JSON.stringify(student);
    return this.http.post(this.URL + 'students', result, {headers: this.headers});
  }

  updateStudent(id: number, student: Student){
    var result = JSON.stringify(student);
    return this.http.put(this.URL + 'students/' + id, result, {headers: this.headers});
  }

  createTeacher(teacher: Teacher){
    var result = JSON.stringify(teacher);
    return this.http.post(this.URL + 'teachers', result, {headers: this.headers});
  }

  updateTeacher(id:number, teacher: Teacher){
    var result = JSON.stringify(teacher);
    return this.http.put(this.URL + 'teachers/' + id, result, {headers: this.headers});
  }

  deleteStudent(id: number){
    return this.http.delete(this.URL + 'students/'+ id);
  }

  deleteTeacher(id: number){
     return this.http.delete(this.URL + 'teachers/'+ id);
  }

  getStudentById(id : number){
     return this.http.get<Student>(this.URL + 'students/'+ id); 
  }

  getTeacherById(id : number){
    return this.http.get<Teacher>(this.URL + 'teachers/'+ id); 
 }
}
