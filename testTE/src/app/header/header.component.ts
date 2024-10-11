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
    private elementRef: ElementRef,
    protected isOpenService: OpenInputService
  ) {}
  public hideSearch(event: Event) {
    console.log(event.target);
    if (this.elementRef.nativeElement.querySelector('input') !== event.target) {
      this.isOpenService.isOpen.next(false);
      console.log('work');
    }
  }
}
