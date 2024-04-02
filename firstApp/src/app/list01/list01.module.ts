import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List01PageRoutingModule } from './list01-routing.module';

import { List01Page } from './list01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List01PageRoutingModule
  ],
  declarations: [List01Page]
})
export class List01PageModule {}
