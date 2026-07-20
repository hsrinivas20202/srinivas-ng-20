import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  imports: [UpperCasePipe],
  templateUrl: './xyz.html',
  styleUrl: './xyz.scss',
})
export class Xyz {

  //string
  x: string = 'Hello World';
  //number
}
