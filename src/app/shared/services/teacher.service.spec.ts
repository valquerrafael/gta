import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Teacher } from 'src/app/shared/model/Teacher';
import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let teacherService: TeacherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    teacherService = new TeacherService(httpClientSpy);
  });

  it('should be created', () => {
    expect(teacherService).toBeTruthy();
  });

  describe('the happy way', () => {
    let newTeacher = new Teacher('Teacher Test', '202220001');

    afterEach(() => {
      newTeacher = new Teacher('Teacher Test', '202220001');
    });

    it('should insert a teacher', () => {
      httpClientSpy.post.and.returnValue(of({ ...newTeacher, id: 1 }));
      
      teacherService.insertTeacher(newTeacher).subscribe(
        teacher => {
          console.log(`insert\nid: ${teacher.id}\nname: ${teacher.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.post.calls.count()).toEqual(1);
    });

    it('should get a teacher', () => {
      httpClientSpy.get.and.returnValue(of({ ...newTeacher, id: 1 }));
      
      teacherService.getTeacher(1).subscribe(
        teacher => {
          console.log(`get\nid: ${teacher.id}\nname: ${teacher.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  
    it('should update a teacher', () => {
      httpClientSpy.put.and.returnValue(of({
        ...newTeacher,
        id: 1,
        name: 'Teacher Test Updated'
      }));

      teacherService.updateTeacher(1, {
        ...newTeacher,
        name: 'Teacher Test Updated'
      }).subscribe(
        teacher => {
          console.log(`update\nid: ${teacher.id}\nname: ${teacher.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.put.calls.count()).toEqual(1);
    });

    it('should delete a teacher', () => {
      httpClientSpy.delete.and.returnValue(of({}));

      teacherService.deleteTeacher(1).subscribe(
        object => {
          console.log(`delete\nobject: ${object}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.delete.calls.count()).toEqual(1);
    });

    it('should get all Teachers', () => {
      httpClientSpy.get.and.returnValue(of([
        {
          ...newTeacher,
          id: 1,
        },
        {
          id: 2,
          name: 'Teacher Test 2'
        }
      ]));

      teacherService.getAllTeachers().subscribe(
        teachers => {
          teachers.forEach(teacher => {
            console.log(`getAll\nid: ${teacher.id}\nname: ${teacher.name}`);
          });
        }
      );

      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  });
});
