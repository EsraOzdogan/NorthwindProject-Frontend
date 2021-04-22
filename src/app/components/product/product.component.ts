import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
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

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    //console.log('init çalıştı');
    this.getProducts();
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
}
