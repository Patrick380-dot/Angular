import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AppComponent, FormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  like : number = 0;
  comment : string = "Commentaire de l'article";

  @Input() titreCarte : string
  @Input() prix : number
  @Output() info = new EventEmitter<string>()
  @Input() description : string
  @Input() urlImg : string
  @Input() textAltImg : string
  @Input() dispo : boolean




  onLike(){
    this.like++;
    this.info.emit(this.titreCarte)
  }

  
}
