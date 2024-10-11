import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import * as constants from './../constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenInputService } from '../services/open-input.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, TabComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  public search: string;
  public isOpenInput = false;
  public isVisible = true;
  public contents = constants.listOfInput;
  private destroyRef = inject(DestroyRef);

  constructor(private isOpenService: OpenInputService) {
    this.search = '';
  }

  ngOnInit() {
    this.isOpenService.isOpen
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isOpen: boolean) => {
        this.isOpenInput = isOpen;
      });
  }
  public changeIsOpen() {
    this.isOpenService.isOpen.next(true);
  }

  public showTab() {
    this.isVisible = true;
  }

  public getSearchString() {
    console.log(this.search);
  }
}
