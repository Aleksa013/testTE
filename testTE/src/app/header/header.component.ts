import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NotificationComponent } from '../notification/notification.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputComponent, NotificationComponent, UserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
