import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/shared/model/Institution';
import { InstitutionService } from 'src/app/shared/services/institution.service';

export interface PeriodicElement {
  name: string;
  position: number;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Valquer', points: 355},
  {position: 2, name: 'Maria', points: 354},
  {position: 3, name: 'Fernando', points: 353},
  {position: 4, name: 'Rogério', points: 352},
  {position: 5, name: 'Rafaela', points: 351},
  {position: 6, name: 'Josué', points: 350},
  {position: 7, name: 'Carol', points: 349},
  {position: 8, name: 'Gabriela', points: 348},
  {position: 9, name: 'Yasmim', points: 347},
  {position: 10, name: 'Erick', points: 346},
];

@Component({
  selector: 'app-institution-home',
  templateUrl: './institution-home.component.html',
  styleUrls: ['./institution-home.component.scss']
})
export class InstitutionHomeComponent implements OnInit {
  institutions: Institution[] = new Array<Institution>();
  institution: Institution = new Institution('', '', '');

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = ELEMENT_DATA;

  constructor(private institutionService: InstitutionService) { }

  ngOnInit(): void {
    this.institutionService.getAll().subscribe((institutions: Institution[]) => {
      console.log(institutions);
      this.institutions = institutions;
    });
  }

}
