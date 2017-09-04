import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';
import { SharedModule } from "../../app/shared.module";

@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [SharedModule,
    IonicPageModule.forChild(TestPage),
  ],
})
export class TestPageModule {}
