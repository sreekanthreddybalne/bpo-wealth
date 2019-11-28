import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadableButtonComponent } from './components/loadable-button/loadable-button.component';
import { WmManagerStepsComponent } from './components/wm-manager-steps/wm-manager-steps.component';
import { MainNavComponent } from './navs/main-nav/main-nav.component';

@NgModule({
  declarations: [LoadableButtonComponent, WmManagerStepsComponent, MainNavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadableButtonComponent,
    WmManagerStepsComponent,
    MainNavComponent
  ]
})
export class SharedModule { }
