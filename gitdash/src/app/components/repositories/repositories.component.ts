import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/index';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';
import { environment } from 'src/environments/environment';

const pageSize = environment.pageSize;

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repositories;
  loading = true;
  pageNumber = 1;
  total = 0;

  constructor(
    private repositoryService: RepositoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getRepositories();
  }

  pageChange() {
    console.log(this.pageNumber);
  }

  getRepositories() {
    this.repositoryService
      .getAllRepositories(this.pageNumber)
      .subscribe(
        (repositories) => {
          this.repositories = repositories;
          this.loading = false;
        }
      );
  }

  goToDetails(repository) {
    this.router.navigateByUrl(`/repositories/${repository.owner.login}/${repository.name}`);
  }
}
