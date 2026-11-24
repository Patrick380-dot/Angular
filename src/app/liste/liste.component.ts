import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule, ArticlesComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

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

