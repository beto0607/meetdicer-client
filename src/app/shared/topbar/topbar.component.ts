import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatPrefix } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-topbar',
  imports: [MatIcon, RouterLink, MatInput, MatFormField, MatPrefix],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
