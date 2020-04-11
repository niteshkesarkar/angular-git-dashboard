import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';

import {SuiModule} from 'ng2-semantic-ui';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';
import { IssuesComponent } from './components/issues/issues.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {RepositoryService} from './services/repository.service';
import { ApiService } from './services/api.service';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';

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
    GoogleChartsModule.forRoot(),
  ],
  providers: [ApiService, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
