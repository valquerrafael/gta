import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/shared/model/Institution';
import { InstitutionService } from 'src/app/shared/services/institution.service';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent implements OnInit {
  institutions: Institution[] = new Array<Institution>();
  institution: Institution = new Institution('', '', '');

  constructor(private institutionService: InstitutionService) { }

  ngOnInit(): void {
    this.institutionService.getAll().subscribe((institutions: Institution[]) => {
      console.log(institutions);
      this.institutions = institutions;
    });
  }

  create(): void {
    this.institutionService.create(this.institution).subscribe(institution => {
      console.log('Institution created successfully!');
      console.log(institution);
      this.institutionService.getAll().subscribe((institutions: Institution[]) => {
        console.log(institutions);
        this.institutions = institutions;
      });
    });
  }

  delete(id: number): void {
    this.institutionService.delete(id).subscribe(() => {});
  }

  goToEdit(): void {
    console.log('go to edit');
  }
}
