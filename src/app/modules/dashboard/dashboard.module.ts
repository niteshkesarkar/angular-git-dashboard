import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { OpenIssuesComponent } from './components/open-issues/open-issues.component';

@NgModule({
  declarations: [OpenIssuesComponent],
  imports: [
    CommonModule,
    GoogleChartsModule.forRoot(),
  ],
  exports: [OpenIssuesComponent]
})
export class DashboardModule { }
