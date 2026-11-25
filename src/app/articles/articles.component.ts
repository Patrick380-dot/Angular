import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { RouterLink} from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, CommonModule, DetailComponent, RouterLink, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  like : number = 0;
  comment : string = "";

  @Input() idArticle : number
  @Input() titreCarte : string
  @Input() prix : number
  @Output() info = new EventEmitter<string>()
  @Input() description : string
  @Input() urlImg : string
  @Input() textAltImg : string
  @Input() dispo : boolean
  jaime : boolean = true


  

  onLike(){
    if (this.jaime === true){
      this.like++
      this.jaime = false
    } else {
      this.like--
      this.jaime = true
    }

    this.info.emit(this.titreCarte)
  }

    getColor() {
    if(this.dispo === true){
      return "green"
    } else {
      return "red"
    }
  }
}
