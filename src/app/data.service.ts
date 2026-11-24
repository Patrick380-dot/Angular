import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      id : 1,
      titreCarte : "Article 1",
      prix : 50,
      description : "Description de l'article 1",
      urlImg : "https://picsum.photos/id/237/200/300",
      textAltImg : "Image de l'article 1",
      dispo : true
    },
    {
      id : 2,
      titreCarte : "Article 2",
      prix : 250,
      description : "Description de l'article 2",
      urlImg : "https://picsum.photos/id/238/200/300",
      textAltImg : "Image de l'article 2",
      dispo : false
    },
    {
      id : 3,
      titreCarte : "Article 3",
      prix : 30,
      description : "Description de l'article 3",
      urlImg : "https://picsum.photos/id/239/200/300",
      textAltImg : "Image de l'article 3",
      dispo : true
    }
  ]

  
}
