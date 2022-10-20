import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Student } from 'src/app/shared/model/Student';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let studentService: StudentService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    studentService = new StudentService(httpClientSpy);
  });

  it('should be created', () => {
    expect(studentService).toBeTruthy();
  });

  describe('the happy way', () => {
    let newStudent = new Student('Student Test', '202220001');

    afterEach(() => {
      newStudent = new Student('Student Test', '202220001');
    });

    it('should insert a student', () => {
      httpClientSpy.post.and.returnValue(of({ ...newStudent, id: 1 }));
      
      studentService.insertStudent(newStudent).subscribe(
        student => {
          console.log(`insert\nid: ${student.id}\nname: ${student.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.post.calls.count()).toEqual(1);
    });

    it('should get a student', () => {
      httpClientSpy.get.and.returnValue(of({ ...newStudent, id: 1 }));
      
      studentService.getStudent(1).subscribe(
        student => {
          console.log(`get\nid: ${student.id}\nname: ${student.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  
    it('should update a student', () => {
      httpClientSpy.put.and.returnValue(of({
        ...newStudent,
        id: 1,
        name: 'Student Test Updated'
      }));

      studentService.updateStudent(1, {
        ...newStudent,
        name: 'Student Test Updated'
      }).subscribe(
        student => {
          console.log(`update\nid: ${student.id}\nname: ${student.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.put.calls.count()).toEqual(1);
    });

    it('should delete a student', () => {
      httpClientSpy.delete.and.returnValue(of({}));

      studentService.deleteStudent(1).subscribe(
        object => {
          console.log(`delete\nobject: ${object}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.delete.calls.count()).toEqual(1);
    });

    it('should get all students', () => {
      httpClientSpy.get.and.returnValue(of([
        {
          ...newStudent,
          id: 1,
        },
        {
          id: 2,
          name: 'Student Test 2'
        }
      ]));

      studentService.getAllStudents().subscribe(
        students => {
          students.forEach(student => {
            console.log(`getAll\nid: ${student.id}\nname: ${student.name}`);
          });
        }
      );

      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  });
});
