import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from '../articles/articles.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, ArticlesComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
