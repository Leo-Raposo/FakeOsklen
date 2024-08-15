import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  // Verifique se o AppComponent também é standalone
  imports: [ProductListComponent, CommonModule, FormsModule],  // Agora pode importar o componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fake-store';
}
