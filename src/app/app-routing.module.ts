import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { PullRequestsComponent } from './components/pull-requests/pull-requests.component';
import { IssuesComponent } from './components/issues/issues.component';
import { HomeComponent } from './components/home/home.component';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';


const routes: Routes = [
  {
    path: 'repositories',
    component: RepositoriesComponent
  },
  {
    path: 'repositories/:owner/:repositoryId',
    component: RepositoryDetailsComponent
  },
  {
    path: 'pull-requests',
    component: PullRequestsComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
