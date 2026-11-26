import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent implements OnInit {

  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value
    const newPrice = this.priceToAdd.value
    console.log("Titre de l'article à ajouter : " + newTitle)
    console.log("Prix de l'article à ajouter : " + newPrice)
    }

  
}
