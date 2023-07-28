import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/shared/services/models/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Product[] = [];
  isThereProducts = false;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
  ) {
    this.updateProductList();
  }

  openCreateProductDialog() {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe((result: String) => {
      if (result == 'OK') {
        console.log('Produto adicionado.');
        this.updateProductList();
      }
      console.log('Pet não adicionado.');
    });
  }

  updateProductList() {
    this.productService.list().subscribe({
      next: (_products) => {
        console.log(_products)
        if (_products != null) {
          this.products = _products;

          this.isThereProducts = (_products.length > 0);
        }
      },
      error: (err) => { console.log("Erro ao recuperar produtos:", err); }
    })

  }
}
