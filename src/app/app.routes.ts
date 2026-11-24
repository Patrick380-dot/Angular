import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { ArticlesComponent } from './articles/articles.component';


export const routes: Routes = [
    {path: "", component: ListeComponent},
    {path: "detail/:id", component: DetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes), ArticlesComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }