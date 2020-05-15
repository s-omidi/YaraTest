import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

const matModules = [
 MatCardModule,
 MatToolbarModule,
 MatIconModule,
 MatProgressSpinnerModule,
 MatSidenavModule,
 MatMenuModule,
 MatListModule
]

@NgModule({
  imports: [
  matModules

  ],
  exports: [
  matModules

  ]
})
export class MaterialModule {}
