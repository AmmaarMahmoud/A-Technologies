import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LunguageService {
 lang = new BehaviorSubject('en')
  constructor() { }

  changeLang(lang:string){
    this.lang.next(lang)
  }
}
