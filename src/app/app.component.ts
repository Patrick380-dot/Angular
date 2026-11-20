import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labonneaffaire';
  message : string = ""

  onAffiche(arg : string){
    return this.message = "Merci d'avoir voté pour l'article : " + arg
  }

  liste = [
    {
      titreCarte : "Article 1",
      prix : 50,
      description : "Description de l'article 1",
      urlImg : "https://picsum.photos/id/237/200/300",
      textAltImg : "Image de l'article 1",
      dispo : true
    },
    {
      titreCarte : "Article 2",
      prix : 250,
      description : "Description de l'article 2",
      urlImg : "https://picsum.photos/id/238/200/300",
      textAltImg : "Image de l'article 2",
      dispo : false
    },
    {
      titreCarte : "Article 3",
      prix : 30,
      description : "Description de l'article 3",
      urlImg : "https://picsum.photos/id/239/200/300",
      textAltImg : "Image de l'article 3",
      dispo : true
    }
  ]

}
