import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OpenSettingsService } from '../services/open-settings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  public count = 32;
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
