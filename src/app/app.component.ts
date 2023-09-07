import { Component, OnInit } from '@angular/core';
import { LunguageService } from './@core/services/lunguage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls:[`app.component.scss`]
})
export class AppComponent implements OnInit{
  lang?:string
  constructor(private languge:LunguageService, private translate: TranslateService){
    this.translate.use('ar')
  }
  ngOnInit(): void {
    this.languge.lang.subscribe(res=>{
      this.lang=res
    })
  }
  
}

