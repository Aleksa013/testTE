import { Component } from '@angular/core';
import { AsideComponent } from './aside/aside.component';
import { SettingFieldComponent } from './setting-field/setting-field.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [AsideComponent, SettingFieldComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {}
