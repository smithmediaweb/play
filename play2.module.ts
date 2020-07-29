import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Play2PageRoutingModule } from './play2-routing.module';

import { Play2Page } from './play2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Play2PageRoutingModule
  ],
  declarations: [Play2Page]
})
export class Play2PageModule {}
