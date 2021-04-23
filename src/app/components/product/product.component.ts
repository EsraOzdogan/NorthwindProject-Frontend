import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  //apiUrl = 'https://localhost:44366/api/products/getall';
  dataLoaded=false; //syc

  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute, 
    ) {}

  ngOnInit(): void {
    //console.log('init çalıştı');
    //this.getProducts();
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  /*getProducts() {
    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe((response) => {
      this.products = response.data;
    });
  }*/
  getProducts() {
    console.log("Starts the api request")
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
      console.log("Ends the api request")

    })   
    console.log("Methods end")

  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })   
  }

  /*addToCart(product:Product){
      if(product.productId===1){
        this.toastrService.error("Hata","Bu ürün sepete eklenemez")
      }else{
        this.toastrService.success("Sepete eklendi",product.productName)
        this.cartService.addToCart(product);
      }
   
  }*/
}
