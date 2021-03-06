import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EcomServices } from 'src/app/ecom.services';
import { SharedService } from 'src/app/shared/shared.services';
import Swal from 'sweetalert2';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
  clickedPorductIndex!: number;
  product!: any;
  clickedProduct: any = localStorage.getItem('clickedProduct');
  productDetails: productModel = JSON.parse(this.clickedProduct);
  totalCount?: number;
  imageIndex:number=-1;
  showPreview!:boolean
  @ViewChild('resultImage',{static:false}) result!:ElementRef
  @ViewChild('myimage',{static:false}) image!:ElementRef
  @ViewChild('myresult',{static:false}) myresult!:HTMLElement
  onAddBag() {
    return this.httpclient
      .post(
        'http://192.168.0.12:3005/api/addToCart',
        {
          productId: this.productDetails.product_id,
          productCount: 1,
        },
        {
          responseType: 'text',
        }
      )
      .subscribe((res) => {
        this.ecomService.cart().subscribe((res: any) => {
          console.log(res);

          this.totalCount = res.reduce((acc: number, ele: any) => {
            return acc + ele.product_count;
          }, 0);
          
          this.shared.setCartLength(this.totalCount!)
        });
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your item is added to cart',
          showConfirmButton: false,
          timer: 1500,
        });
      });
      
  }
  show(){
this.showPreview=true
  }
  onMouse(i:number){
console.log(i);
this.imageIndex=i
  }
  onBuy(){
    let productArray=[]
    productArray.push(this.productDetails)
console.log(this.productDetails);
this.pageService.cartArray.next(productArray)
this.route.navigate(['/address'])
  }
  constructor(
    private ecomService: EcomServices,
    private shared: SharedService,
    private httpclient: HttpClient,
    private pageService:PagesService,
    private route:Router,
  ) {}
 myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
 
  
  ngOnInit(): void {
    this.imageIndex=0
    
  }
  ngOnChanges(): void {}
}
type productModel = {
  id?: number;
  product_id?: number;
  product_name?: string;
  brand?: string;
  price?: number;
  gender?: string;
  images?: Array<any>;
  createdAt?: string;
  updatedAt?: string;
};
