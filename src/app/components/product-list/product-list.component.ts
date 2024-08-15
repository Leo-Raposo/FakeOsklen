import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,  // Adicione esta linha para torná-lo standalone
  imports: [CommonModule, FormsModule]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProductId!: number;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    });
  }

  loadProductById(): void {
    if (this.selectedProductId) {
      this.productService.getById(this.selectedProductId).subscribe((product) => {
        this.products = [product]; // Atualiza a lista para mostrar apenas o produto encontrado
      });
    } else {
      this.loadAllProducts(); // Caso o ID não seja fornecido, recarrega todos os produtos
    }
  }

  deleteProduct(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}
