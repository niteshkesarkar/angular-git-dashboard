import { Component, OnInit } from '@angular/core';
import {TransitionController, Transition, TransitionDirection} from 'ng2-semantic-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public transitionController = new TransitionController();

  title = 'Company Hiring Report';
  type = 'ColumnChart';
  data = [
     ['2014', 200],
     ['2015', 560],
     ['2016', 280],
     ['2017', 300],
     ['2018', 600]
  ];
  columnNames = ['Year', 'India'];
  options = {};
  width = 800;
  height = 500;

  constructor() { }

  public animate(transitionName: string = 'scale') {
    this.transitionController.animate(
        new Transition(transitionName, 500, TransitionDirection.In, () => console.log('Completed transition.')));
  }

  ngOnInit() {
  }

}
