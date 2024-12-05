import { Component } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { PrimaryButtonComponent } from "../buttons";

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, PrimaryButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
