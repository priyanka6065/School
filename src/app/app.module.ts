import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { SchoolService } from './school.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'teacher-list', component: TeacherListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StudentListComponent,
    TeacherListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
