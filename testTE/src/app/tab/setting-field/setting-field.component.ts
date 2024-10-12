import { Component, OnInit } from '@angular/core';
import { optionList, filterList } from './../../constants';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './setting-field.component.html',
  styleUrl: './setting-field.component.scss',
})
export class SettingFieldComponent implements OnInit {
  public optionList = optionList;
  public filterList = filterList;
  public settingsForm: FormGroup = new FormGroup({});
  constructor(private FB: FormBuilder) {}

  ngOnInit(): void {
    this.settingsForm = this.FB.group({
      author: this.FB.control(''),
    });

    this.optionList.forEach((option) => {
      this.settingsForm.addControl(option, this.FB.control(''));
    });

    this.filterList.forEach((filter) => {
      this.settingsForm.addControl(filter, this.FB.control(''));
    });
  }
}
