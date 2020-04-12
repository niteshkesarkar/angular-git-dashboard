import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SuiModule} from 'ng2-semantic-ui';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';
import { IssuesComponent } from './components/issues/issues.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, RepositoryService, DashboardService } from './services/index';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    PullRequestsComponent,
    IssuesComponent,
    HomeComponent,
    EllipsisPipe,
    RepositoryDetailsComponent
  ],
  imports: [
    HttpClientModule,
    SuiModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [ApiService, RepositoryService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
