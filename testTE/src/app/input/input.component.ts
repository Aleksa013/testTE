import { Component, OnInit } from '@angular/core';
import * as constants from './../constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  public contents = constants.listOfInput;

  ngOnInit() {
    console.log(this.contents);
  }
}
