import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LunguageService } from 'src/app/@core/services/lunguage.service';

@Component({
  selector: 'app-layout',
  templateUrl:'./layout.component.html',
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
  }
  ngOnInit(): void {
    this.Form = this.buider.group({
      nameDate:[''],
      to_time:[''],
      Minutes_Selection:[''],
      Choose_appointment:[''],
      name_User:[''],
      Sunday:this.buider.array([
       this.buider.group({
          startTime:[''],
          endTime:[''],
        })
      ]),
      Monday:this.buider.array([
       this.buider.group({
          startTime:[''],
          endTime:[''],
        })
      ]),
      Tuesday:this.buider.array([
       this.buider.group({
          startTime:[''],
          endTime:[''],
        })
      ]),
      Wednesday:this.buider.array([
       this.buider.group({
          startTime:[''],
          endTime:[''],
        })
      ]),
      Thursday:this.buider.array([
       this.buider.group({
          startTime:[''],
          endTime:[''],
        })
      ]),
      key_1:['']
     })
  }
  get sunday() {
    return this.Form.get('Sunday') as FormArray;
  }
  get Monday() {
    return this.Form.get('Monday') as FormArray;
  }
  get Tuesday() {
    return this.Form.get('Tuesday') as FormArray;
  }
  get Wednesday() {
    return this.Form.get('Wednesday') as FormArray;
  }
  get Thursday() {
    return this.Form.get('Thursday') as FormArray;
  }
  get key_1() {
    return this.Form.get('key_1');
  }

  addTimer(index:number){


    switch (index) {
      case 0:
        {
          const sunday =this.buider.group({
            startTime:[''],
            endTime:['']
          })
          this.sunday.push(sunday)
          break;
        }

      case 1:
        {
          const Monday =this.buider.group({
            startTime:[''],
            endTime:['']
          })
          this.Monday.push(Monday)
          break;
        }
        // لا يوجد break هنا
      case 2:
        {
          const Tuesday =this.buider.group({
            startTime:[''],
            endTime:['']
          })
          this.Tuesday.push(Tuesday)
          break;
        }// هذا هو الـ break المناسب
      case 3:
        {
          const Wednesday =this.buider.group({
            startTime:[''],
            endTime:['']
          })
          this.Wednesday.push(Wednesday)
          break;
        }
      default:
        {
          const Thursday =this.buider.group({
            startTime:[''],
            endTime:['']
          })
          this.Thursday.push(Thursday)
          break;
        }
    }
    
  }
  removeTimer(num:number,index:number){

    switch (num) {
      case 0:
        {
          const sundayArray = this.Form.get('Sunday') as FormArray;
          sundayArray.removeAt(index);
          break;
        }

      case 1:
        {
          const mondayArray = this.Form.get('Monday') as FormArray;
          mondayArray.removeAt(index);
          break;
        }
        // لا يوجد break هنا
      case 2:
        {
          const tuesdayArray = this.Form.get('Tuesday') as FormArray;
          tuesdayArray.removeAt(index);
          break;
        }
      case 3:
        {
          const WednesayArray = this.Form.get('Wednesday') as FormArray;
          WednesayArray.removeAt(index);
          break;
        }
      default:
        {
          const ThursdayArray = this.Form.get('Thursday') as FormArray;
          ThursdayArray.removeAt(index);
          break;
        }
    }
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

  Showtimer(n:number){
    if(n==0){
      
    }
    switch (n) {
      case 0:
        {
          this.check_0=!this.check_0
          break;
        }

      case 1:
        {
          this.check_1=!this.check_1
          break;
        }
        // لا يوجد break هنا
      case 2:
        {
          this.check_2=!this.check_2
          break;
        }
      case 3:
        {
          this.check_3=!this.check_3
          break;
        }
      default:
        {
          this.check_4=!this.check_4
          break;
        }
    }
  }

  Submit(){
    const formValue=JSON.stringify(this.Form.value)
    // console.log(formValue);
    alert(formValue)
    
  }
  srcImg:File|null=null
  seletedImg(event:any){
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // يتم عرض الصورة كـ data URL
        this.srcImg = e.target.result;
        console.log(this.srcImg); // يمكنك استخدامها أو عرضها في واجهة المستخدم
      };

      reader.readAsDataURL(file);
  }
}
}