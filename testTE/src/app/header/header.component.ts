import { Component, ElementRef } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NotificationComponent } from '../notification/notification.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { OpenInputService } from '../services/open-input.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputComponent, NotificationComponent, UserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    protected isOpenService: OpenInputService,
    private el: ElementRef
  ) {}
  public hideSearch(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('makeInvisible')) {
      this.el.nativeElement.querySelector('.open').classList.add('close');
      this.el.nativeElement.querySelector('.open').classList.remove('open');
      setTimeout(() => {
        this.isOpenService.isOpen.next(false);
      }, 900);
      console.log('work');
    }
  }
}
