import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './components/card/card.component';
import { SubstringPipe } from './pipes/subString';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [CardComponent, SubstringPipe, LoaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    SubstringPipe,
    LoaderComponent,
    CardComponent
  ]
})
export class SharedModule { }
