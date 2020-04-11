import { Component, OnInit } from '@angular/core';
import {TransitionController, Transition, TransitionDirection} from 'ng2-semantic-ui';
import { DashboardService } from 'src/app/services';
import { Repository } from 'src/app/services/interfaces/repository.interface';
import { map, tap, take, filter } from 'rxjs/operators';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public transitionController = new TransitionController();
  private ready = false;
  title = 'Open Issues More than 15)';
  type = 'ColumnChart';
  data: any[] = [];
  columnNames: string[];
  options = {};
  width = 900;
  height = 500;


  constructor(private dashbordService: DashboardService) { }

  public animate(transitionName: string = 'scale') {
    this.transitionController.animate(
        new Transition(transitionName, 500, TransitionDirection.In, () => console.log('Completed transition.')));
  }

  ngOnInit() {
    this.dashbordService.getRepos().pipe(
      map(repos => {
        return _.orderBy(repos, ['open_issues_count'], ['desc']);
      }),
      filter(repos => {
        return _.remove(repos, (o) => o.open_issues_count === 0 || o.open_issues_count < 15);
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
