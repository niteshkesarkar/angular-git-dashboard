
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services';
import { map, tap, take, filter } from 'rxjs/operators';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-forks',
  templateUrl: './forks.component.html',
  styleUrls: ['./forks.component.scss']
})
export class ForksComponent implements OnInit {

  loading = true;
  maxForks = 15;
  title = `Repositories having more than ${this.maxForks} forks`;
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
        return _.orderBy(repos, ['forks_count'], ['desc']);
      }),
      filter(repos => {
        return _.remove(repos, (o) => o.forks_count === 0 || o.forks_count < 15);
      }),
      tap(repos => {
        console.log(repos);
        return repos;
      })
    ).subscribe(
      (result) => {
        this.columnNames = ['Repository', 'Forks'];
        _.map(result, (repo) => {
          this.data.push([
            repo.name,
            repo.forks_count]);
        });
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
