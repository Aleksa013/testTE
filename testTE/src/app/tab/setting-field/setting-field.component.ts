import { Component } from '@angular/core';
import { optionList, filterList } from './../../constants';

@Component({
  selector: 'app-setting-field',
  standalone: true,
  imports: [],
  templateUrl: './setting-field.component.html',
  styleUrl: './setting-field.component.scss',
})
export class SettingFieldComponent {
  public optionList = optionList;
  public filterList = filterList;
}
