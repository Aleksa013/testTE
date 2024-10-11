import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import * as constants from './../constants';
import { CommonModule } from '@angular/common';
import { OpenInputService } from '../services/open-input.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  public isOpenInput = false;
  public isVisible = false;
  public contents = constants.listOfInput;
  private destroyRef = inject(DestroyRef);

  constructor(private isOpenService: OpenInputService) {}

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
}
