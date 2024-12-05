import { Component, output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  imports: [MatButtonModule],
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  buttonClicked = output()
}
