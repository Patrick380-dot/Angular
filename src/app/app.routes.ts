import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { ArticlesComponent } from './articles/articles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';


export const routes: Routes = [
    {path: "", component: ListeComponent},
    {path: "detail/:id", component: DetailComponent},
    {path: "ajouter", component: AjouterComponent},
    {path: "liste", redirectTo: ""},
    {path: "form", component: AjouterComponent},
    {path: "**", component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes), ArticlesComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
