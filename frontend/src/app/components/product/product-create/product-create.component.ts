import { Product } from "./../product.model";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

var price = 125.45;

var dinheiro = price.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
console.log(dinheiro);

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    description: "",
    balance: null,
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
