import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenInputService {
  public isOpen: BehaviorSubject<boolean>;

  constructor() {
    this.isOpen = new BehaviorSubject(true);
  }
}
