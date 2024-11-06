import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { HELPComponent } from './help/help.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop ENIT" },
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop ENIT" },
  { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop ENIT" },
  { path: 'help', component: HELPComponent, title: "Cart - Joe's Robot Shop ENIT" },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }