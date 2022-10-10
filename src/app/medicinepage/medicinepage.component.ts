import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { MedicineService } from '../services/medicine/medicine.service';
import { Medicines } from '../shared/models/medicine';

@Component({
  selector: 'app-medicinepage',
  templateUrl: './medicinepage.component.html',
  styleUrls: ['./medicinepage.component.css']
})
export class MedicinepageComponent implements OnInit {
medicine!:Medicines;
  constructor(private activatedRoute:ActivatedRoute,
     private medicineService:MedicineService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
       this.medicine = medicineService.getMedicineById(params['id'])
    })
   }

  ngOnInit(): void {
  }
    addToCart(){
      this.cartService.addToCart(this.medicine);
      this.router.navigateByUrl('/cart-page')
    }

}
