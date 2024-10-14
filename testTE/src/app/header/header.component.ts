import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NotificationComponent } from '../notification/notification.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { OpenInputService } from '../services/open-input.service';
import { BurgerComponent } from './burger/burger.component';
import { OpenSettingsService } from '../services/open-settings.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    BurgerComponent,
    InputComponent,
    NotificationComponent,
    UserInfoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public settingsOpen = false;
  private destroyRef = inject(DestroyRef);
  constructor(
    protected isOpenService: OpenInputService,
    protected isOpenSettings: OpenSettingsService,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.isOpenSettings.isOpenSettings
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isOpen: boolean) => {
        this.settingsOpen = isOpen;
      });
  }
  public hideSearch(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('makeInvisible')) {
      this.el.nativeElement.querySelector('.open').classList.add('close');
      this.el.nativeElement.querySelector('.open').classList.remove('open');
      setTimeout(() => {
        this.isOpenService.isOpen.next(false);
        this.isOpenSettings.isOpenSettings.next(false);
      }, 500);
    }
  }
}
