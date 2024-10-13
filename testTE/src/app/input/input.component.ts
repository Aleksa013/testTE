import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import * as constants from './../constants';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenInputService } from '../services/open-input.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TabComponent } from '../tab/tab.component';
import { OpenSettingsService } from '../services/open-settings.service';

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

  constructor(
    private isOpenService: OpenInputService,
    private isOpenSettings: OpenSettingsService
  ) {
    this.search = '';
  }

  ngOnInit() {
    this.isOpenService.isOpen
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isOpen: boolean) => {
        this.isOpenInput = isOpen;
        if (!isOpen) {
          this.isVisible = false;
        }
      });
  }
  public changeIsOpen() {
    this.isOpenService.isOpen.next(true);
  }

  public showTab() {
    this.isVisible = true;
    this.isOpenSettings.isOpenSettings.next(true);
  }

  public getSearchString() {
    console.log(this.search);
  }
}
