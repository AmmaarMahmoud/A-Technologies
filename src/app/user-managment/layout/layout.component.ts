import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LunguageService } from 'src/app/@core/services/lunguage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  checked: boolean = true;
  check_0: boolean = false;
  check_1: boolean = false;
  check_2: boolean = false;
  check_3: boolean = false;
  check_4: boolean = false;
  check_5: boolean = false;
  check_6: boolean = false;
  value1: number = 20;
  value3: number = 20;
  showtimer:boolean=false
  showcounter:boolean=false
  @ViewChildren('paerent') paerent!: QueryList<ElementRef>;
  Form!:FormGroup
  constructor(private raber:Renderer2,private languge:LunguageService , private translate: TranslateService, private buider:FormBuilder) {
   this.languge.lang.subscribe(res=>{
    this.translate.use(res)
   })
   this.Form=this.buider.group({
    nameDate:[''],
    to_time:[''],
    Minutes_Selection:[''],
    Choose_appointment:[''],
    name_User:[''],
   })
  }
  ngOnInit(): void {
  }
  addTimer(index:number){

    const elementsArray = this.paerent.toArray();

    if (elementsArray.length >=5) {
      const thirdElement = elementsArray[index];
      console.log(thirdElement.nativeElement);
      const mydiv=this.raber.createElement('div');
      this.raber.addClass(mydiv,'d-flex')
      this.raber.addClass(mydiv,'align-items-center')
      this.raber.addClass(mydiv,'mb-2')
      this.raber.addClass(mydiv,'flex-wrap')
      this.raber.addClass(mydiv,'flex-sm-nowrap')
      const time_1=this.raber.createElement('input');
      time_1.type='time'
      this.raber.addClass(time_1,'form-control')
      this.raber.addClass(time_1,'bg-white')
      const time_2=this.raber.createElement('input');
      time_2.type='time'
      this.raber.addClass(time_2,'form-control')
      this.raber.addClass(time_2,'bg-white')
      const imgMinus=this.raber.createElement('img')
      imgMinus.src='assets/icons/minus.png'
      this.raber.addClass(imgMinus,'mx-2')
      this.raber.listen(imgMinus,'click',()=>{
        this.deleteelement(event);
      })

      this.raber.appendChild(mydiv,time_1)
      this.raber.appendChild(mydiv,time_2)
      this.raber.appendChild(mydiv,imgMinus)
      this.raber.appendChild(thirdElement.nativeElement,mydiv)
      // قم بالتلاعب بالعنصر الثالث هنا
      
    }
  }
  deleteelement(event?:any){
    console.log(event.target);
    const parent = event.target.parentNode.parentNode
    const child = event.target.parentNode
    this.raber.removeChild(parent,child)
    
  }
  ChangeLang(event?:any){
    this.languge.changeLang(event.target.value)
  }
  showTimerInput(){
    this.showtimer=true
  }
  hideTimerInput(){
    this.showtimer=false
  }
  showCounterVector(){
    this.showcounter=true
  }
  hideCounterVector(){
    this.showcounter=false
  }
  dialogg(){
    this.check_5=!this.check_5
  }
}
