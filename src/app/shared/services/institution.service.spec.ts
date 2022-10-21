import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Institution } from 'src/app/shared/model/Institution';
import { InstitutionService } from './institution.service';

describe('InstitutionService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let institutionService: InstitutionService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    institutionService = new InstitutionService(httpClientSpy);
  });

  it('should be created', () => {
    expect(institutionService).toBeTruthy();
  });

  describe('the happy way', () => {
    let newInstitution = new Institution('Institution Test');

    afterEach(() => {
      newInstitution = new Institution('Institution Test');
    });

    it('should insert a institution', () => {
      httpClientSpy.post.and.returnValue(of({ ...newInstitution, id: 1 }));
      
      institutionService.insertInstitution(newInstitution).subscribe(
        institution => {
          console.log(`insert\nid: ${institution.id}\nname: ${institution.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.post.calls.count()).toEqual(1);
    });

    it('should get a institution', () => {
      httpClientSpy.get.and.returnValue(of({ ...newInstitution, id: 1 }));
      
      institutionService.getInstitution(1).subscribe(
        institution => {
          console.log(`get\nid: ${institution.id}\nname: ${institution.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  
    it('should update a institution', () => {
      httpClientSpy.put.and.returnValue(of({
        ...newInstitution,
        id: 1,
        name: 'Institution Test Updated'
      }));

      institutionService.updateInstitution(1, {
        ...newInstitution,
        name: 'Institution Test Updated'
      }).subscribe(
        institution => {
          console.log(`update\nid: ${institution.id}\nname: ${institution.name}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.put.calls.count()).toEqual(1);
    });

    it('should delete a institution', () => {
      httpClientSpy.delete.and.returnValue(of({}));

      institutionService.deleteInstitution(1).subscribe(
        object => {
          console.log(`delete\nobject: ${object}`);
        }, error => {
          console.error(error);
        }
      );

      expect(httpClientSpy.delete.calls.count()).toEqual(1);
    });

    it('should get all institutions', () => {
      httpClientSpy.get.and.returnValue(of([
        {
          ...newInstitution,
          id: 1,
        },
        {
          id: 2,
          name: 'Institution Test 2'
        }
      ]));

      institutionService.getAllInstitutions().subscribe(
        institutions => {
          institutions.forEach(institution => {
            console.log(`getAll\nid: ${institution.id}\nname: ${institution.name}`);
          });
        }
      );

      expect(httpClientSpy.get.calls.count()).toEqual(1);
    });
  });
});
