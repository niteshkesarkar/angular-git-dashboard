import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui';
import { GoogleChartsModule } from 'angular-google-charts';
import { ForksComponent } from './components/forks/forks.component';
import { OpenIssuesComponent } from './components/open-issues/open-issues.component';

@NgModule({
  declarations: [ForksComponent, OpenIssuesComponent],
  imports: [
    CommonModule,
    SuiModule,
    GoogleChartsModule.forRoot(),
  ],
  exports: [ ForksComponent, OpenIssuesComponent ]
})
export class DashboardModule { }
