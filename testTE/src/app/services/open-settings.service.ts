import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenSettingsService {
  public isOpenSettings: BehaviorSubject<boolean>;

  constructor() {
    this.isOpenSettings = new BehaviorSubject(false);
  }
}
