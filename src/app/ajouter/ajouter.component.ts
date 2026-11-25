import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent implements OnInit {

  titleToAdd = "";
  priceToAdd = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd
    const newPrice = this.priceToAdd
    console.log("Titre de l'article à ajouter : " + newTitle)
    console.log("Prix de l'article à ajouter : " + newPrice)
  }
}
