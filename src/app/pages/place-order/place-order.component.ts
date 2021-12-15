import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval} from 'rxjs';
import { map,take } from 'rxjs/operators'
import { EcomServices } from 'src/app/ecom.services';
import { ProductModel } from 'src/app/shared/product.model';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit {
  placeOrder?: string;
  address?: string;
  phone?: number;
  productId!: number;
  cartArray!:ProductModel[];
  totalPrice!:number
  totalAmount!:number
  totalDiscount!:number
  shippingAddress!:any
  timer!:number
  showDownload:boolean=true
  constructor(private ecom: EcomServices, private pagesService: PagesService,private router:Router) {}
  
  download() {
    let mywindow = window.open('', 'PRINT', 'height=700,width=700');
    mywindow!.document.write(document.getElementById('bill')!.outerHTML);
    mywindow!.print();
    mywindow!.focus(); // necessary for IE >= 10*/

    mywindow!.close();

    return true;
    // var blob = new Blob([text], {
    //    type: "text/html"
    // });
    // var url = window.URL.createObjectURL(blob);
    // var a = document.createElement("a");
    // a.href = url;
    // a.download = filename;
    // a.click();
   
 }

  ngOnInit(): void {
    this.pagesService.cartArray.subscribe(res=>{
      // console.log(res);
      
    this.cartArray=res
    });
    this.pagesService.totalPrice.subscribe(res=>{
      this.totalPrice=res
    });
    this.pagesService.totalAmount.subscribe(res=>{
    this.totalAmount=res
    });
    this.pagesService.totalDiscount.subscribe(res=>{
      this.totalDiscount=res
      });
      this.pagesService.shippingAddress.subscribe(res=>{
        this.shippingAddress=res
        console.log(res);
        })
        setTimeout(() => {
        
          this.router.navigate(['/home']);
      },30000)
     interval(1000).pipe(
      take(5)
     ).subscribe(res=>{
       console.log(res);
this.timer=res+1
     });

    
    
  }
}
