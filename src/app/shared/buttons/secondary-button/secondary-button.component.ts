import { Component, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  imports: [MatButtonModule],
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss',
})
export class SecondaryButtonComponent {
  buttonClicked = output()
}
