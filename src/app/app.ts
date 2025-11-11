import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponent } from './my-new.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyNewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('srini-angular20-app');
}
