import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../services/medicine/medicine.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api : MedicineService)  { }

  ngOnInit(): void {

    
   
  }

}
