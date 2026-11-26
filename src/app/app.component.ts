import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DataService } from './data.service';
import { interval   } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  title = 'labonneaffaire';
  message : string = ""
  liste
  secondes


  constructor(private dataService: DataService    ){}

  ngOnInit() {
    this.liste = this.dataService.listeArticles

    if (isPlatformBrowser(this.platformId)) {
      const compteur = interval(1000).pipe(
        filter(value => value % 2 === 0),
        map(value => value % 2 === 0 ?
          `${value} est pair`:
          `${value} est impair`
        )
      )

      compteur.subscribe({
        next: (v) => {this.secondes = v},
        error: (e) => console.error(e),
        complete: () => console.info('Compteur terminé')
      });
    }
  }

  onAffiche(arg : string){
    return this.message = "Merci d'avoir voté pour l'article : " + arg
  }

  


}
