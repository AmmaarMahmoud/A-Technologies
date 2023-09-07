import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UserManagmentRoutingModule,
    InputSwitchModule,
    FormsModule,
    InputNumberModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class UserManagmentModule { }
