import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  totalPrice!:number
  totalAmount!:number
  totalDiscount!:number
  // @Output() isEdit=new EventEmitter<boolean>()
  addressForm!: FormGroup;

  onPayment(){
this.router.navigate(['/orderplaced'])
  }
  constructor(private router:Router,private pageService:PagesService) { }

  ngOnInit(): void {
    this.addressForm= new FormGroup({
      'userdata':new FormGroup({
      'username': new FormControl(null,[Validators.required]),
      'cardNumber': new FormControl(null, [Validators.required]),
      'month':new FormControl(null,[Validators.required]),
      'year':new FormControl(null,[Validators.required]),
      'cvv':new FormControl(null,[Validators.required])
      }),
      
    });
    this.pageService.totalPrice.subscribe(res=>{
      this.totalPrice=res
    })
    this.pageService.totalAmount.subscribe(res=>{
    this.totalAmount=res
    })
    this.pageService.totalDiscount.subscribe(res=>{
      this.totalDiscount=res
      })
  }

}
