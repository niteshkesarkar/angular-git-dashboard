import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services';
import { map, tap, take, filter } from 'rxjs/operators';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-open-issues',
  templateUrl: './open-issues.component.html',
  styleUrls: ['./open-issues.component.scss']
})
export class OpenIssuesComponent implements OnInit {
  ready = false;
  maxOpenIssues = 20;
  title = `Repositories having more than ${this.maxOpenIssues} forks`;
  type = 'ColumnChart';
  data: any[] = [];
  columnNames: string[];
  options = {};
  width = 900;
  height = 500;

  constructor(private dashbordService: DashboardService) { }

  ngOnInit() {
    this.dashbordService.getRepos().pipe(
      map(repos => {
        return _.orderBy(repos, ['open_issues_count'], ['desc']);
      }),
      filter(repos => {
        return _.remove(repos, (o) => o.open_issues_count === 0 || o.open_issues_count < this.maxOpenIssues);
      }),
      // tap(repos => {
      //   console.log(repos);
      //   return repos;
      // })
    ).subscribe(
      (result) => {
        this.columnNames = ['Repository', 'Open Issues'];
        _.map(result, (repo) => {
          this.data.push([
            repo.name,
            repo.open_issues_count]);
        });
        this.ready = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}