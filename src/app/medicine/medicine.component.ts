import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pharmacy-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  pageTitle = 'Medicine List';
  medicines: any[] = [
    {
      "medicineId": 1,
      "medicineName": "Dolo",
      "medicineCompany": "Cipla",
      "price": 20
    },
    {
      "medicineId": 5,
      "medicineName": "Radient",
      "medicineCompany": "Cipla",
      "price": 20
    },
    {
      "medicineId": 2,
      "medicineName": "Nector",
      "medicineCompany": "Cipla",
      "price": 20
    }, {
      "medicineId": 3,
      "medicineName": "Relief",
      "medicineCompany": "Cipla",
      "price": 20
    }, {
      "medicineId": 4,
      "medicineName": "Boronil",
      "medicineCompany": "Cipla",
      "price": 20
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
