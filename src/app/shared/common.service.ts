import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  
  

  constructor(private http : HttpClient) { }

  stu: Student = {
    id: 0,
    name: '',
    address: '',
    mobile: 0,
    marks: 0,
    course: '',
    division: ''
   
  }

  url : string = 'http://localhost:9090/stu-api/';
  saveStudent(stu : Student) : Observable<Student>{
    console.log("in student common service");

    return this.http.post<Student>(this.url+'save-student', stu);
  }
  


  getStudentData() : Observable<Student[]> {
   
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(id: number) {
    return this.http.delete<Student>(this.url+id);
  }

  updateStudent(stu: Student) {
    
    return this.http.put<Student>(this.url+stu.id, stu);
  }
}
