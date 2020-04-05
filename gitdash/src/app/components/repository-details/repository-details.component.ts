import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {
  repositoryId: string;
  owner: string;
  repository;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get('owner');
    this.repositoryId = this.route.snapshot.paramMap.get('repositoryId');
    this.getRepository();
  }

  getRepository() {
    this.repositoryService
      .getRepositoryById(this.owner, this.repositoryId)
      .subscribe(
        (repository) => {
          this.repository = repository;
          this.loading = false;
        }
      );
  }
}
