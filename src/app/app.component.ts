import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  message : string = ""
  liste

  constructor(private dataService: DataService    ){}

  ngOnInit() {
    this.liste = this.dataService.listeArticles
  }

  onAffiche(arg : string){
    return this.message = "Merci d'avoir voté pour l'article : " + arg
  }

  


}
