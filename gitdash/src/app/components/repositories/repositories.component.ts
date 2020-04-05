import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  allRepositories;
  repositories;
  loading = true;
  pageNumber = 1;
  pageSize = 10;
  total = 0;

  constructor(
    private repositoryService: RepositoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getRepositories();
  }

  getRepositories() {
    this.repositoryService
      .getAllRepositories()
      .subscribe(
        (repositories) => {
          this.allRepositories = repositories;
          this.paginate(this.pageNumber);
        }
      );
  }

  paginate(pageNumber) {
    this.total = this.allRepositories.length;
    this.repositories = _.clone(this.allRepositories);
    console.log(this.allRepositories);

    if (this.allRepositories.length === 0) {
      this.loading = false;
      console.log(this.total, pageNumber, this.pageSize);
      return;
    }

    this.repositories = this.repositories.splice(pageNumber - 1 , this.pageSize - 1);
    this.loading = false;
    console.log(this.total, pageNumber, this.pageSize);
  }

  goToDetails(repository) {
    this.router.navigateByUrl(`/repositories/${repository.owner.login}/${repository.name}`);
  }
}
