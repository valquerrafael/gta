import { Component, OnInit } from '@angular/core';

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

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {}

}
