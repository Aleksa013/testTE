import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OpenSettingsService } from '../../services/open-settings.service';

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss',
})
export class BurgerComponent implements OnInit {
  public settingsOpen = false;
  private destroyRef = inject(DestroyRef);

  constructor(protected isOpenSettings: OpenSettingsService) {}

  ngOnInit() {
    this.isOpenSettings.isOpenSettings
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isOpen: boolean) => {
        this.settingsOpen = isOpen;
      });
  }
}
