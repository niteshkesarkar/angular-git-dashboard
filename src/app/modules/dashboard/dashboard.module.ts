import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';
import { GoogleChartsModule } from 'angular-google-charts';
import { OpenIssuesComponent } from './components/open-issues/open-issues.component';
import { ForksComponent } from './components/forks/forks.component';

@NgModule({
  declarations: [OpenIssuesComponent, ForksComponent],
  imports: [
    CommonModule,
    SuiModule,
    GoogleChartsModule.forRoot(),
  ],
  exports: [ OpenIssuesComponent, ForksComponent ]
})
export class DashboardModule { }
