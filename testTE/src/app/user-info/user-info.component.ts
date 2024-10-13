import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [NotificationComponent, CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {}
